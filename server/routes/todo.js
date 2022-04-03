const express = require('express');
const router = express.Router();
const passport = require('passport');

const Todo = require('../models/Todo');
const User = require('../models/User');

const secure = passport.authenticate('jwt', { session: false });

router.get('/me', secure, async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.user.username,
      },
    });
    return res.json({
      message: user,
    });
  } catch (err) {
    return res.json({
      message: err,
    });
  }
});

router.get('/my_todos', secure, async (req, res) => {
  try {
    const todos = await Todo.findAll({
      where: {
        userId: req.user.id,
      },
      order: [['createdAt', 'desc']],
    });
    return res.json({ todos: todos });
  } catch (err) {
    return res.json({ message: err });
  }
});
router.post('/todo', secure, async (req, res) => {
  const { content, completed } = req.body;
  const newTodo = await Todo.create({
    content: content,
    completed: completed,
  });
  //associate UserId and Todos foreignkey UserId
  await newTodo.setUser(req.user.id);
  const savedTodo = await newTodo.save();

  if (savedTodo) {
    res.json({ message: 'todo added!' });
  }
});
router.get('/completed_todos', secure, async (req, res) => {
  const todos = await Todo.findAll({
    where: {
      userId: req.user.id,
      completed: 1,
    },
    order: [['createdAt', 'desc']],
  });
  return res.json({ completedTodos: todos });
});
module.exports = router;
