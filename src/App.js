import React from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/Signup" element={<Signup></Signup>}></Route>
          <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
