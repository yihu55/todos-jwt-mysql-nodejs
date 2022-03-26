const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Todo = require('../models/Todo');

const User = sequelize.define(
  'User',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
User.hasMany(Todo);

// User.associate = (models) => {
//   User.hasMany(models.Todo, {
//     onDelete: 'cascade',
//   });
// };
module.exports = User;
