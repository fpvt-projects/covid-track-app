import React from "react";

function ResultForm() {
  return (
    <div className={`w-full`}>
      <h1 className={"italic mt-4 select-none"}>Test result information.</h1>
      <div className={"w-full flex flex-col laptop:flex-row"}>
        <div className={"w-full"}>
          <p className={"font-semibold mt-2 select-none"}>Antigen Type:</p>
          <input // Antigen Type
            className={"border border-black pl-2 outline-none w-full h-8"}
            type="text"
          />
        </div>
        <div className={"w-full"}>
          <p className={"font-semibold mt-2 select-none"}>Brand:</p>
          <input // Brand
            className={"border border-black pl-2 outline-none w-full h-8"}
            type="text"
          />
        </div>
      </div>
      <div
        className={
          "mx-auto w-full mt-4 flex justify-around flex-col laptop:flex-row laptop:w-1/2 select-none"
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

export default ResultForm;
