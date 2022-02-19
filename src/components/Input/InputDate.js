import React from "react";

function InputDate({ onChange, value, label }) {
  return (
    <div
      className={`w-full h-12 border px-2 mb-2 bg-white shadow-[inset_0px_2px_5px_-1px_rgba(68,68,68,0.6)] rounded`}
    >
      <div className={`w-full`}>
        <h1 className={`mt-1 text-xs select-none text-gray-400 ml-1`}>
          {label}
        </h1>
        <input // Birthdate
          className={`pl-2 outline-none w-full cursor-pointer bg-white`}
          onChange={onChange}
          value={value}
          type="date"
        />
      </div>
    </div>
  );
}

export default InputDate;
