import React from "react";

function TestResultForm({ toggleResultForm }) {
  return (
    <div className={`w-full ${toggleResultForm ? "block" : "hidden"} `}>
      <h1 className={"italic mt-4"}>Test result information.</h1>
      <div className={"w-full flex flex-col laptop:flex-row"}>
        <div className={"w-full"}>
          <p className={"font-semibold mt-2"}>Antigen Type:</p>
          <input // Antigen Type
            className={"border border-black pl-2 outline-none w-full h-8"}
            type="text"
          />
        </div>
        <div className={"w-full"}>
          <p className={"font-semibold mt-2"}>Brand:</p>
          <input // Brand
            className={"border border-black pl-2 outline-none w-full h-8"}
            type="text"
          />
        </div>
      </div>
      <div
        className={
          "mx-auto w-full mt-4 flex justify-around flex-col laptop:flex-row laptop:w-1/2"
        }
      >
        <div>
          <input type="radio" value="positive" name="result" /> I am covid
          POSITIVE.
        </div>
        <div>
          <input type="radio" value="negative" name="result" /> I am covid
          NEGATIVE.
        </div>
      </div>
    </div>
  );
}

export default TestResultForm;
