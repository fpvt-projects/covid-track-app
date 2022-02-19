import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";
import HealthLogo from "../assets/HealthLogo.png";
import Logo from "../assets/re-design assets/Logo.jpg";
import background from "../assets/re-design assets/background.jpg";
import { AiFillCaretDown } from "react-icons/ai";

function Register() {
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
    <div
      className="w-screen flex flex-col h-screen overflow-hidden select-none relative bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* TOP BAR */}
      <div className="w-full h-12 bg-white flex justify-between items-center shadow-lg px-12">
        <div className={`h-full flex items-center`}>
          <img className={`h-3/5 mr-2`} src={Logo} alt="" />
          <h1 className="font-bold tracking-widest text-xl tablet:block hidden">
            COVID TRACKING APP
          </h1>
        </div>
        <div className={`flex items-center`}>
          <h1 className={`hidden tablet:block mr-2`}>
            Already have an account?
          </h1>
          <h1
            className={`flex items-center cursor-pointer whitespace-nowrap`}
            onClick={showLoginForm}
          >
            <p className={`text-lg font-semibold ml-1 flex items-center`}>
              LOGIN <AiFillCaretDown />
            </p>
          </h1>
        </div>
      </div>

      <div className={`relative`}>
        <div
          className={`absolute ${
            toggleSignIn ? "flex" : "hidden"
          } w-full h-100 top-0 m-0 right-0 bg-red-300 tablet:w-80 tablet:right-4`}
        >
          <LoginForm />
        </div>
        <div className={`w-full h-full absolute top-0 bg-slate-800`}></div>
      </div>

      {/* REGISTRATION FORM HERE! */}
      <div className={`w-full h-full flex flex-col items-center`}>
        <RegistrationForm />
      </div>

      <div
        className={
          "h-4 w-full bg-zinc-800 flex absolute bottom-0 justify-center items-center py-2"
        }
      >
        <h1 className={"text-center text-white text-xs tablet:block hidden"}>
          This website is intended for learning purpose only.
        </h1>

        <a
          target="_blank"
          rel="noreferrer"
          className={"text-center text-white text-xs ml-1"}
          href="https://www.freepik.com/vectors/nursing-logo"
        >
          Nursing logo vector created by freepik - www.freepik.com
        </a>
      </div>
    </div>
  );
}

export default Register;
