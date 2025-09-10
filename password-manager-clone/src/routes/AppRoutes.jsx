import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Hero from "../pages/hero/Hero";
import Signup from "../pages/signup/Signup";
import Seed from "../pages/seed/Seed";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/seed" element={<Seed />}/>
    </Routes>
  );
}

export default AppRoutes;
