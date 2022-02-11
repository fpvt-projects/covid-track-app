import React from "react";

function ResultForm({
  antigenType,
  brand,
  result,
  inputAntigenType,
  inputBrand,
  inputResult,
}) {
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
          <select
            className={`w-full cursor-pointer outline-none`}
            value={antigenType}
            onChange={inputAntigenType}
          >
            <option value={null}>-- Select antigen type --</option>
            <option value="Nasopharyngeal_swab">Nasopharyngeal_swab</option>
            <option value="Sputum/Saliva">Sputum/Saliva</option>
            <option value="Whole_blood/Serum">Whole_blood/Serum</option>
          </select>
        </div>
        <div className={"w-full flex flex-col"}>
          <div className={`w-full h-12 border mb-2 border-black rounded`}>
            <h1 className={`text-xs select-none text-gray-400 ml-1`}>Brand</h1>
            <input // Brand
              className={`pl-2 outline-none w-full cursor-pointer`}
              value={brand}
              onChange={inputBrand}
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
            onChange={inputResult}
            checked={result === "Positive" ? true : false}
            type="radio"
            value="Positive"
            name="result"
          />{" "}
          POSITIVE
        </div>
        <div>
          <input
            className={`cursor-pointer`}
            onChange={inputResult}
            checked={result === "Negative" ? true : false}
            type="radio"
            value="Negative"
            name="result"
          />{" "}
          NEGATIVE
        </div>
      </div>
    </div>
  );
}

export default ResultForm;
