const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('../models/User');

const Todo = sequelize.define('Todo', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Todo);
Todo.belongsTo(User); //, { as: 'User', foreignKey: 'UserId' });

// Todo.associate = (models) => {
//   Todo.belongsTo(models.User, {
//     foreignKey: {
//       allowNull: false,
//     },
//   });
// };
module.exports = Todo;
