import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Front from "./components/Front";
import Login from "./components/Login";
import {Route,BrowserRouter,Routes} from 'react-router-dom'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
