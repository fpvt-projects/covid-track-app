import React from "react";

function InputText({ label, value, onChange, maxLength }) {
  return (
    <div
      className={`w-full h-12 border px-2  mb-2 bg-white shadow-[inset_0px_2px_5px_-1px_rgba(68,68,68,0.6)] "border-none"
       rounded`}
    >
      <h1 className={`mt-1 text-xs select-none text-gray-400 ml-1`}>{label}</h1>
      <input // Email
        className={`pl-2 outline-none w-full bg-white `}
        type="text"
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </div>
  );
}

export default InputText;
