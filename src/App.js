import React from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
