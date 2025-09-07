import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Hero from "../pages/hero/Hero";
// import Signup from "../pages/signup/Signup";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  );
}

export default AppRoutes;
