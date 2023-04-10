"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetail = exports.User = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'yashdb',
});
// Define User model
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
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
class UserDetail extends sequelize_1.Model {
}
exports.UserDetail = UserDetail;
UserDetail.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    address_street: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    address_suite: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    address_city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    address_zipcode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
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
