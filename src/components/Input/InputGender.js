import React from "react";

function InputGender({ onChange }) {
  return (
    <div className={"w-4/5 mt-2 mx-auto flex justify-around"}>
      <div className={`flex items-center`}>
        <input // Gender Male
          onChange={onChange}
          className={"mr-2 cursor-pointer"}
          type="radio"
          value="Male"
          name="gender"
        />
        <h1 className={`text-xs font-semibold tracking-widest`}>MALE</h1>
      </div>
      <div className={`flex items-center`}>
        <input // Gender Female
          onChange={onChange}
          className={"mr-2 cursor-pointer"}
          type="radio"
          value="Female"
          name="gender"
        />
        <h1 className={`text-xs font-semibold tracking-widest`}>FEMALE</h1>
      </div>
    </div>
  );
}

export default InputGender;
