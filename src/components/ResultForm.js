import React from "react";

function ResultForm() {
  return (
    <div className={`w-full`}>
      <h1 className={"italic mt-4 select-none mb-2"}>
        Test result information.
      </h1>
      <div className={"w-full flex flex-col"}>
        <div className={`w-full h-12 border mb-2 border-black rounded`}>
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>
            Antigen Type
          </h1>
          <input // Antigen type
            className={`pl-2 outline-none w-full cursor-pointer`}
            type="text"
          />
        </div>
        <div className={"w-full flex flex-col"}>
          <div className={`w-full h-12 border mb-2 border-black rounded`}>
            <h1 className={`text-xs select-none text-gray-400 ml-1`}>Brand</h1>
            <input // Brand
              className={`pl-2 outline-none w-full cursor-pointer`}
              type="text"
            />
          </div>
        </div>
      </div>
      <div
        className={
          "mx-auto w-full mt-4 flex justify-around flex-col laptop:flex-row select-none"
        }
      >
        <div>
          <input
            className={`cursor-pointer`}
            type="radio"
            value="positive"
            name="result"
          />{" "}
          POSITIVE
        </div>
        <div>
          <input
            className={`cursor-pointer`}
            type="radio"
            value="negative"
            name="result"
          />{" "}
          NEGATIVE
        </div>
      </div>
    </div>
  );
}

export default ResultForm;
