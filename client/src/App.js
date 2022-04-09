import { Routes, Route } from 'react-router-dom';
import React, { useState, createContext, useEffect } from 'react';
import Home from './pages/Home';
import UserCreatePage from './pages/UserCreatePage';
import LoginPage from './pages/Login';
import { BaseFuncs } from './data/BaseFuncs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledH1 } from './styles/ListStyled';

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
    getTodoList();
    getMe();
  }, []);

  return (
    <div>
      <Context.Provider
        value={{ todos, setTodos, getTodoList, username, getMe }}
      >
        <StyledH1>Todo App</StyledH1>
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
