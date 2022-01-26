import React from "react";
import { useNavigate } from "react-router-dom";

function Register({ login }) {
  const navigate = useNavigate();
  const handleLogin = () => {
    login();
    navigate("/");
  };
  return (
    <div>
      <h1>This is from Register</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Register;
