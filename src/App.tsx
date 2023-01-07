import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
