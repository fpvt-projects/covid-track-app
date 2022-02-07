import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";
import HealthLogo from "../assets/HealthLogo.png";

function Register({ login }) {
  const [toggleSignIn, setToggleSignIn] = useState(false);

  const showLoginForm = () => setToggleSignIn(!toggleSignIn);
  const navigate = useNavigate();

  const redirect = () => {
    if (sessionStorage.getItem("token") !== null) {
      navigate("/");
    }
  };

  useEffect(() => {
    redirect();
  });

  return (
    <div className="w-screen flex flex-col h-screen overflow-hidden select-none">
      <div className="w-full h-12 bg-teal-900 flex justify-between items-center px-12">
        <div className={`h-full flex items-center`}>
          <img className={`h-4/5`} src={HealthLogo} />
          <h1 className="text-white font-bold tracking-widest text-xl tablet:block hidden">
            COVID TRACKING APP
          </h1>
        </div>
        <div>
          <h1 className={`text-white cursor-pointer`} onClick={showLoginForm}>
            SIGN IN
          </h1>
        </div>
      </div>
      <div className={`relative`}>
        <div
          className={`absolute ${
            toggleSignIn ? "flex" : "hidden"
          } w-full h-100 top-0 m-0 right-0 bg-red-300 tablet:w-80 tablet:right-4`}
        >
          <LoginForm login={login} />
        </div>
        <div className={`w-full h-full absolute top-0 bg-teal-900`}></div>
      </div>

      <div className="w-full h-full bg-zinc-200 flex flex-col items-center overflow-y-auto">
        <RegistrationForm />
      </div>
      <div
        className={
          "h-4 w-full bg-teal-900 flex justify-center items-center py-2"
        }
      >
        <h1 className={"text-center text-white text-xs tablet:block hidden"}>
          This website is intended for learning purpose only.
        </h1>
        <a
          className={"text-center text-white text-xs ml-1"}
          target="_blank"
          rel="noreferrer"
          href="https://www.freepik.com/vectors/logo"
        >
          Logo vector created by freepik - www.freepik.com
        </a>
      </div>
    </div>
  );
}

export default Register;
