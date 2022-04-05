import { Routes, Route } from 'react-router-dom';
import React, { useState, createContext, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import UserCreatePage from './pages/UserCreatePage';
import LoginPage from './pages/Login';
import { BaseFuncs } from './data/BaseFuncs';

const Context = createContext({});
function App() {
  const [todos, setTodos] = useState(null);
  const [username, setUsername] = useState('');

  const getTodoList = () => {
    BaseFuncs.getTodoList()
      .then((res) => res.json())
      .then((data) => setTodos(data.todos));
  };
  const getMe = () => {
    BaseFuncs.user
      .getme()
      .then((res) => res.json())
      .then((data) => setUsername(data.username));
  };
  useEffect(() => {
    getMe();
  }, []);

  return (
    <div>
      <Context.Provider value={{ todos, setTodos, getTodoList, username }}>
        <h1>Todo App</h1>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<UserCreatePage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}
export { Context };
export default App;
