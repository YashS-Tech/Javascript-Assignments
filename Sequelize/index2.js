const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2');
const express = require('express');
const app = express();

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
  
  
  app.get('/users', async (req, res) => {
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
  });
  
  app.listen(3000, () => console.log('Server started on port 3000'));