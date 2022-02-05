import React, { useState } from "react";
import ResultInfo from "./ResultInfo";

function Log({ date, status, results, count }) {
  const [toggleInfo, setToggleInfo] = useState(false);

  const handleClick = () => setToggleInfo(!toggleInfo);

  return (
    <div
      className={`${
        count % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
      } cursor-pointer hover:bg-gray-400 select-none`}
      onClick={handleClick}
    >
      <div className={`h-12 px-2 flex items-center`}>
        <div
          className={`w-3 h-3 rounded-2xl mx-2 ${
            status === "Ongoing" ? "bg-red-500" : "bg-green-500"
          }`}
        ></div>
        <div className={`w-28 text-sm font-semibold tracking-widest`}>
          {date}
        </div>
        <div className={`flex items-center`}>
          <div> Quarantine {status}</div>
        </div>
      </div>

      <div className={`${toggleInfo ? "flex" : "hidden"}`}>
        <ResultInfo results={results} count={count} />
      </div>
    </div>
  );
}

export default Log;
