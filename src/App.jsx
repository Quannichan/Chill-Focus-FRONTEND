import React from 'react';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Index from "./pages/index";
import "./stylesheets/App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/Welcome" element={<Index/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
