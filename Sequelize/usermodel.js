/*const { Sequelize } = require('sequelize');
module.exports = (sequelize) => {
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
  
  return User;
};

  module.exports = (sequelize) => {
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
 
  return UserDetails;
};*/

const Sequelize = require('sequelize');
const sequelize = new Sequelize('yashdb', 'root', 'root123', {
  host: 'localhost',
  dialect: 'mysql2',
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

module.exports = User;

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
  module.exports = UserDetails;
  User.hasOne(UserDetails, { foreignKey: 'id' });
  





