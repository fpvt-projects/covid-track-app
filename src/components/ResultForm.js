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
      <h1
        className={
          "text-sm font-semibold tracking-widest mt-4 select-none mb-2"
        }
      >
        Test result information.
      </h1>
      <div className={"w-full flex flex-col"}>
        <div
          className={`w-full h-12 border px-2 mb-2 bg-white shadow-[inset_0px_2px_5px_-1px_rgba(68,68,68,0.6)] rounded`}
        >
          <h1 className={`mt-1 text-xs select-none text-gray-400 ml-1`}>
            Antigen Type
          </h1>
          <select
            className={`w-full cursor-pointer outline-none bg-white`}
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
          <div
            className={`w-full px-2 h-12 borderpx-2 mb-2 bg-white shadow-[inset_0px_2px_5px_-1px_rgba(68,68,68,0.6)] rounded`}
          >
            <h1 className={`mt-1 text-xs select-none text-gray-400 ml-1`}>
              Brand
            </h1>
            <input // Brand
              className={`pl-2 outline-none w-full`}
              value={brand}
              onChange={inputBrand}
              type="text"
            />
          </div>
        </div>
      </div>
      <div
        className={
          "mx-auto w-full mt-2 flex justify-around flex-col laptop:flex-row select-none"
        }
      >
        <div className={`flex items-center`}>
          <input
            className={`cursor-pointer mr-2 `}
            onChange={inputResult}
            checked={result === "Positive" ? true : false}
            type="radio"
            value="Positive"
            name="result"
          />{" "}
          <h1 className={`text-xs font-semibold tracking-widest`}>POSITIVE</h1>
        </div>
        <div className={`flex items-center`}>
          <input
            className={`cursor-pointer mr-2`}
            onChange={inputResult}
            checked={result === "Negative" ? true : false}
            type="radio"
            value="Negative"
            name="result"
          />{" "}
          <h1 className={`text-xs font-semibold tracking-widest`}>NEGATIVE</h1>
        </div>
      </div>
    </div>
  );
}

export default ResultForm;
