import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './style.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Todo from './Todo';
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Todo" element={<Todo />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
