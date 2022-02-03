import React, { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";

function Register({ login }) {
  const [toggleSignIn, setToggleSignIn] = useState(false);

  const showLoginForm = () => setToggleSignIn(!toggleSignIn);

  return (
    <div className="w-screen flex flex-col h-screen overflow-hidden">
      <div className="w-full h-12 bg-teal-900 flex justify-between items-center px-12">
        <div>
          <h1 className="text-white">LOGO</h1>
        </div>
        <div>
          <h1 className="text-white cursor-pointer" onClick={showLoginForm}>
            SIGN IN
          </h1>
        </div>
      </div>
      <div className={`relative`}>
        <div
          className={`absolute ${
            toggleSignIn ? "flex" : "hidden"
          } w-full h-80 top-0 m-0 right-0 bg-red-300 tablet:w-80 tablet:right-4`}
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
        <h1 className={"text-center text-white text-xs"}>
          This website is intended for learning purpose only.
        </h1>
      </div>
    </div>
  );
}

export default Register;
