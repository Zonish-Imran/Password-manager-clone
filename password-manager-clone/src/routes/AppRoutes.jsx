import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Hero from "../pages/hero/Hero";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
