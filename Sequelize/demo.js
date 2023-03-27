/*const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2');
const express = require('express');
const app = express();

const sequelize = new Sequelize('yashdb', 'root', 'root123', {
    dialect: 'mysql',
    host: 'localhost',
    dialectModule: mysql2
  });

  const User = require("./usermodel")(sequelize);
    
  const UserDetails = require("./usermodel")(sequelize);
 
  
  //User.hasOne(UserDetails, { foreignKey: 'id' });
  User.hasOne(UserDetails, { foreignKey: 'id' });
UserDetails.belongsTo(User, { foreignKey: 'id' });
  
  
  app.get('/users', async (req, res) => {
    const users = await User.findAll({
        include: [UserDetails]
        
      });
    
      res.json(users);
    });
  
  app.listen(3000, () => console.log('Server started on port 3000'));*/

/*
  
  const express = require('express');
  const bodyParser = require('body-parser');
  const app = express();
  const { Sequelize } = require('sequelize');
  const mysql2 = require('mysql2');


  const sequelize = new Sequelize('yashdb', 'root', 'root123', {
  dialect: 'mysql',
  host: 'localhost',
  dialectModule: mysql2
});

  app.use(bodyParser.json());
  const { User, UserDetails } = require('./usermodel');

 
 
  */
  /*
  app.post('/users', async (req, res) => {
    const { name, username, email, address_street, address_suite, address_city, address_zipcode, phone } = req.body;
    
    try {
      const user = await User.create({ name, username, email });
      
      const userDetails = await UserDetails.create({ address_street, address_suite, address_city, address_zipcode, phone, id: user.id });
      
      res.status(201).json({ user, userDetails });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  });
  
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
  */

  /*const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const sequelize = new Sequelize('yashdb', 'root', 'root123', {
    dialect: 'mysql',
    host: 'localhost',
    dialectModule: mysql2
  });

  app.use(bodyParser.json());
  const { User, UserDetails } = require('./usermodel');

  app.post('/users', async (req, res) => {
    const { name, username, email, address_street, address_suite, address_city, address_zipcode, phone } = req.body;
    
    try {
      const user = await User.create({ name, username, email });
      
      const userDetails = await UserDetails.create({ address_street, address_suite, address_city, address_zipcode, phone, id: user.id });
      
      res.status(201).json({ user, userDetails });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  });
  
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });*/
  const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));


const sequelize = new Sequelize('yashdb', 'root', 'root123', {
    dialect: 'mysql',
    host: 'localhost',
    dialectModule: mysql2
  });

  const User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    username: Sequelize.STRING,
    email: Sequelize.STRING
  }, {
    tableName: 'user',
    timestamps: false
  });
  
  const UserDetails = sequelize.define('UserDetails', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    address_street: Sequelize.STRING,
    address_suite: Sequelize.STRING,
    address_city: Sequelize.STRING,
    address_zipcode: Sequelize.STRING,
    phone: Sequelize.STRING
  }, {
    tableName: 'user_details',
    timestamps: false
  });
  
  User.hasOne(UserDetails, { foreignKey: 'id' });
  
  
 /* app.get('/users', async (req, res) => {
    try {
      const users = await User.findAll({
        include: [{ model: UserDetails, attributes: ['address_street', 'address_suite', 'address_city', 'address_zipcode', 'phone'] }],
        attributes: ['id', 'name', 'username', 'email']
      });
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });*/

  /*app.post('/users', async (req, res) => {
    try {
      const { name, username, email, address_street, address_suite, address_city, address_zipcode, phone } = req.body;
  
      const user = await User.create({ name, username, email });
      
      const userDetails = await UserDetails.create({ id: user.id, address_street, address_suite, address_city, address_zipcode, phone });
  
      res.json({ message: 'User created successfully', user, userDetails });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating user' });
    }
  });
  
  
  app.listen(3000, () => console.log('Server started on port 3000'));*/

  app.put("/users/:id", async (req, res) => {
    try {
      const { name, username, email } = req.body;
      const result = await User.update(
        { name, username, email },
        { where: { id: req.params.id } }
      );
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });