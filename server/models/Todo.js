const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('../models/User');

const Todo = sequelize.define('Todo', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

User.hasMany(Todo);
Todo.belongsTo(User);

module.exports = Todo;
