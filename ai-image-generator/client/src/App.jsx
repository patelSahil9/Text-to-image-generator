import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Front from "./components/Front";
import Login from "./components/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Temp from "./components/Temp";
import HowItWorks from "./components/HowItWorks";
import HowItWorks2 from "./components/HowItWorks2";
import Customerreview from "./components/Customerreview";
import Footer from "./components/Footer";
export default function App() {
  return (
      <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Front />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temp" element={<Temp />} />
            </Routes>
            <HowItWorks/>
            <HowItWorks2/>
            <Customerreview/>
            <Footer/>
      </BrowserRouter>
  );
}
