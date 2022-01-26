import React from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";

function Register({ login }) {
  const navigate = useNavigate();
  const handleLogin = () => {
    login();
    navigate("/");
  };
  return (
    <div className="w-screen flex flex-col h-screen overflow-hidden">
      <div className="w-full h-12 bg-teal-900 flex justify-between items-center px-8">
        <div>
          <h1 className="text-white">LOGO</h1>
        </div>
        <div>
          <h1 className="text-white cursor-pointer" onClick={handleLogin}>
            SIGN IN
          </h1>
        </div>
      </div>
      <div className="w-full h-full bg-zinc-200 flex flex-col items-center overflow-y-auto">
        <RegistrationForm />
      </div>
      <div
        className={
          "h-4 w-full bg-teal-900 flex justify-center items-center py-2"
        }
      >
        <h1 className={"text-center text-white text-xs"}>
          This website is intended for learning purpose only.
        </h1>
      </div>
    </div>
  );
}

export default Register;
