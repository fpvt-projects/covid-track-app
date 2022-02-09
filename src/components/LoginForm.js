import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HealthLogo from "../assets/HealthLogo.png";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputEmail = (e) => setEmail(e.target.value);
  const handleInputPassword = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    if (email === "") {
      setError("Please input a valid email.");
    } else if (password === "") {
      setError("Please input a valid password.");
    } else {
      axios
        .post(`/auth`, { auth: { email: email, password: password } })
        .then((res) => {
          console.log(res);
          sessionStorage.setItem("token", res.data.jwt);
          navigate("/");
        })
        .catch((error) => {
          if (error.response.request.status === 404) {
            setError("Email or password does not match!");
          }
        });
    }
  };

  useEffect(() => {
    if (email !== null || email !== "") {
      setError("");
    }
  }, [email]);

  useEffect(() => {
    if (password !== null || password !== "") {
      setError("");
    }
  }, [password]);

  return (
    <div
      className={`w-full h-full bg-white shadow-xl flex flex-col justify-center items-center`}
    >
      <div
        className={`w-full my-4 flex px-4 flex-col items-center justify-center`}
      >
        <img
          className={`w-20 h-full`}
          src={HealthLogo}
          alt="Health-Logo-freepik"
          border="0"
        />
        <div className={`flex flex-col `}>
          <h1 className={`font-semibold text-l text-red-500`}>
            COVID TRACKING APP
          </h1>
          <h1
            className={`text-xs text-center tracking-widest font-semibold text-red-500`}
          >
            FINAL PROJECT 2022
          </h1>
        </div>
      </div>

      <div
        className={`w-4/5 h-12 border ${
          error === "Please input a valid email."
            ? "border-red-500"
            : "border-black"
        } rounded`}
      >
        <h1 className={`text-xs select-none text-gray-400 ml-1`}>Email</h1>
        <input // Email
          className={`pl-2 outline-none w-full`}
          type="text"
          value={email}
          onChange={handleInputEmail}
        />
      </div>
      <div
        className={`w-4/5 h-12 border mt-4 ${
          error === "Please input a valid password."
            ? "border-red-500"
            : "border-black"
        } rounded`}
      >
        <h1 className={`text-xs select-none text-gray-400 ml-1`}>Password</h1>
        <input // password
          className={` pl-2 outline-none w-4/5`}
          type="password"
          value={password}
          onChange={handleInputPassword}
        />
      </div>

      <h1
        className={"text-red-600 text-center font-semibold my-4 animate-bounce"}
      >
        {error}
      </h1>

      <button
        className={
          "tracking-widest bg-teal-900 hover:bg-teal-700 px-6 py-2 rounded mt-2 font-bold text-white cursoir-pointer mb-8"
        }
        onClick={handleLogin}
      >
        LOG IN
      </button>
    </div>
  );
}

export default LoginForm;
