import React from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
