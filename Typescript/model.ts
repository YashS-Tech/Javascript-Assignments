import { Sequelize, DataTypes, Model } from 'sequelize';



const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'yashdb',
  });
  
  // Define User model
  export class User extends Model {
      
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
          /*async customValidateEmail(value: string) {
            // Custom validation to check email domain
            if (!value.endsWith('@gmail.com')) {
              throw new Error('Email domain must be @gmail.com');
            }*/
          },
        },
      },
     
    /*isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },*/
   {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    timestamps: false,
  });


 

  // Define UserDetail model
export class UserDetail extends Model  {
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
/*module.exports = {
    sequelize,
    User,
    UserDetail
  };
  */