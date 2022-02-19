import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../components/Input/InputText";
import InputPassword from "../components/Input/InputPassword";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputEmail = (e) => setEmail(e.target.value);
  const handleInputPassword = (e) => setPassword(e.target.value);

  const featureLock = () => alert(`Feature not yet implemented.`);

  const handleLogin = () => {
    if (email === "") {
      alert(`Please input a valid email.`);
    } else if (password === "") {
      alert(`Please input a valid password.`);
    } else {
      axios
        .post(`/auth`, { auth: { email: email, password: password } })
        .then((res) => {
          sessionStorage.setItem("token", res.data.jwt);
          navigate("/");
        })
        .catch((error) => {
          if (error.response.request.status === 404) {
            alert(`Invalid email or password!`);
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
      <div className={"w-4/5 mx-auto flex flex-col"}>
        <InputText label="Email" value={email} onChange={handleInputEmail} />
        <InputPassword
          label="Password"
          value={password}
          onChange={handleInputPassword}
        />
        <h1
          className={`text-right text-sm hover:text-blue-800 cursor-pointer `}
          onClick={featureLock}
        >
          Forgot password?
        </h1>
        <button
          className={
            "w-full tracking-widest bg-slate-800 hover:bg-slate-600 px-6 py-2 rounded-sm mt-2 font-bold text-white cursoir-pointer"
          }
          onClick={handleLogin}
        >
          LOGIN
        </button>

        <div className={`w-4/5 text-center mx-auto`}>
          <h1 className={`font-semibold text-sm py-1`}>or</h1>
        </div>

        <div
          className={`w-full mt-2 cursor-pointer flex items-center  text-white bg-blue-800 py-2 px-1 hover:bg-blue-900`}
          onClick={featureLock}
        >
          <div className={`text-xl w-1/4  flex justify-center `}>
            <FaFacebookSquare />
          </div>
          <div
            className={`w-2/3 flex justify-start text-xs tracking-widest py-1`}
          >
            Login with Facebook
          </div>
        </div>
        <div
          className={`w-full mt-2 cursor-pointer flex items-center text-white bg-red-600 py-2 px-1 hover:bg-red-700`}
          onClick={featureLock}
        >
          <div className={`text-xl w-1/4 flex justify-center`}>
            <FaGoogle />
          </div>
          <div
            className={`w-2/3 flex justify-start text-xs tracking-widest py-1`}
          >
            Login with Google
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
