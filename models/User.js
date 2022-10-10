const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
    }
},
    {
        hooks: {
            beforeCreate: async(data) => {
                data.password = await bcrypt.hash(data.password);
                return data;
            },
            beforeUpdate: async(data) => {
                data.password = await bcrypt.hash(data.password);
                return data;
            }
        },
        sequelize
    });

module.exports = User;