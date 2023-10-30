import React, { useEffect, useState } from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Privatecom from "./Pages/PrivateComp";

const App = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    let data = localStorage.getItem("user");
    setUser(data);
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Privatecom></Privatecom>}>
            <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
          </Route>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/Signup" element={<Signup></Signup>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
