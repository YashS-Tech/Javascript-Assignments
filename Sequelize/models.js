const Sequelize = require('sequelize');
const mysql2 = require('mysql2');
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
  module.exports = {
    sequelize,
    User,
    UserDetails
  };
  