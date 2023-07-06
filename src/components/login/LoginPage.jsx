import React from "react";
import Login from "./Login";
import SingUp from "./SingUp";
import { Routes, Route } from "react-router-dom";
const LoginPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default LoginPage;
