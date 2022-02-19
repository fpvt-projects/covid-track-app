import React, { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

function InputPassword({ label, value, onChange, error }) {
  const [togglePassword, setTogglePassword] = useState(false);

  const showPassword = () => setTogglePassword(!togglePassword);

  return (
    <div
      className={`w-full h-12 border px-2  mb-2 bg-white shadow-[inset_0px_2px_5px_-1px_rgba(68,68,68,0.6)] ${
        error === "PasswordError" ? "border-red-500" : "border-none"
      } rounded`}
    >
      <h1 className={`mt-1 text-xs select-none text-gray-400 ml-1`}>{label}</h1>
      <div className={`flex justify-between`}>
        <input
          className={`pl-2 outline-none w-full bg-white text-lg`}
          type={togglePassword ? "text" : "password"}
          placeholder="••••••••"
          value={value}
          onChange={onChange}
        />
        <button className={`text-2xl text-zinc-300`} onClick={showPassword}>
          {togglePassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
      </div>
    </div>
  );
}

export default InputPassword;
