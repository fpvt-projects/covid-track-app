import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ login }) {
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
      alert("logged In!");
      login();
      navigate("/");
    }
  };

  return (
    <div
      className={`w-full h-full bg-white shadow-xl flex flex-col justify-center items-center`}
    >
      <input // Email
        className={`border ${
          error === "Please input a valid email."
            ? "border-red-500"
            : "border-black"
        } pl-2 outline-none w-4/5 mt-4 h-8`}
        type="text"
        value={email}
        onChange={handleInputEmail}
        placeholder="Email"
      />
      <input // Email
        className={`border ${
          error === "Please input a valid password."
            ? "border-red-500"
            : "border-black"
        } pl-2 outline-none w-4/5 mt-4 h-8`}
        type="password"
        value={password}
        onChange={handleInputPassword}
        placeholder="Password"
      />

      <h1 className={"text-red-600 text-center font-semibold my-4"}>{error}</h1>

      <button
        className={
          "tracking-widest bg-teal-900 px-6 py-2 rounded mt-2 font-bold text-white cursoir-pointer mb-8"
        }
        onClick={handleLogin}
      >
        Log in
      </button>
    </div>
  );
}

export default LoginForm;
