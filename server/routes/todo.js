const express = require('express');
const router = express.Router();
const passport = require('passport');

const Todo = require('../models/Todo');

router.get(
  '/todo',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ message: 'todos' });
  }
);
router.post(
  '/todo',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { content } = req.body;
    const newTodo = await Todo.create({ content: content });
    //associate UserId and Todos foreignkey UserId
    await newTodo.setUser(req.user.id);
    const savedTodo = await newTodo.save();

    if (savedTodo) {
      res.json({ message: 'todo added!' });
    }
  }
);
module.exports = router;
