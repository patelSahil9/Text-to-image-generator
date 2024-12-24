import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Front from './components/Front';
import Login from './components/Login';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
