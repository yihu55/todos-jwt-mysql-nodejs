import { Routes, Route } from 'react-router-dom';
import React, { useState, createContext } from 'react';
import './App.css';
import Home from './pages/Home';
import UserCreatePage from './pages/UserCreatePage';
import LoginPage from './pages/Login';
import { BaseFuncs } from './data/BaseFuncs';

const Context = createContext({});
function App() {
  const [todos, setTodos] = useState(null);

  const getTodoList = () => {
    BaseFuncs.getTodoList()
      .then((res) => res.json())
      .then((data) => setTodos(data.todos));
  };

  return (
    <div>
      <Context.Provider value={{ todos, setTodos, getTodoList }}>
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
