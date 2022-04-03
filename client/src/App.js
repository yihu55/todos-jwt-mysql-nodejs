import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import UserCreatePage from './pages/UserCreatePage';
import LoginPage from './pages/Login';

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<UserCreatePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
