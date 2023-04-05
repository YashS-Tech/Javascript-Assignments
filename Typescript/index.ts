//import express from 'express';
import express, { Request, Response } from "express";
import bodyParser from 'body-parser';
import { Sequelize, DataTypes, Model } from 'sequelize';

// Initialize Express app
const app = express();
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define Sequelize connection
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root123',
  database: 'yashdb',
});

// Define User model
class User extends Model {
    
        public id!: number;
        public name!: string;
        public username!: string;
        public email!: string;
        public readonly createdAt!: Date;
        public readonly updatedAt!: Date;
      
}
User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    unique:true,
    allowNull: false,
    validate: {
        isEmail: {
        // args:true
          msg: 'Invalid email format',
        },
        async customValidateEmail(value: string) {
          // Custom validation to check email domain
          if (!value.endsWith('@gmail.com')) {
            throw new Error('Email domain must be @gmail.com');
          }
        },
      },
    },
   
  /*isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },*/
}, {
  sequelize,
  modelName: 'User',
  tableName: 'user',
  timestamps: false,
});

// Define UserDetail model
class UserDetail extends Model  {
    public id!: number;
    public addressStreet!: string;
    public addressSuite!: string;
    public addressCity!: string;
    public addressZipcode!: string;
    public phone!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
UserDetail.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address_street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address_suite: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address_city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address_zipcode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'UserDetail',
  tableName: 'user_details',
  timestamps: false,
});

// Define User-UserDetail association
User.hasOne(UserDetail, { foreignKey: 'id' });
UserDetail.belongsTo(User, { foreignKey: 'id' });


app.get('/users', async (req: Request, res: Response) => {
    const users = await User.findAll({ include: [UserDetail] });
    res.json(users);
  });
  
// Define API endpoint to create new user with admin role
app.post('/users', async (req, res) => {
  try {
    const { name, username, email, address_street, address_suite, address_city, address_zipcode, phone } = req.body;
    console.log(req);
    /*
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });*/

    // Create new User and UserDetail records
    const user = await User.create({ name, username, email, /*isAdmin: true*/ });
    const userDetail = await UserDetail.create({  id: user.id,address_street, address_suite, address_city, address_zipcode, phone, });

    // Send success response
    res.status(201).json({ user, userDetail });
  } catch (error) {
    // Send error response
    res.status(400).json({ error});
  }
});


//update user

app.put('/users/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, username } = req.body;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      user.name = name;
      user.username = username;
       // throw error if email is being updated
    if (req.body.email) {
        return res.status(400).send('Cannot update email');
      }
      await user.save();
      res.send(user);
    } catch (error:any) {
      res.status(500).send({ message: error.message });
    }
  });

// Start the server
app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });