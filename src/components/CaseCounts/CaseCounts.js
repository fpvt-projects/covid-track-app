import React from "react";

function CaseCounts({ apidata, appdata, title }) {
  return (
    <div
      className={`w-11/12 h-24 bg-gradient-to-t from-gray-300 to-white rounded mt-4 shadow-2xl flex flex-col justify-center px-4`}
    >
      <h1 className={`font-semibold text-gray-500 text-m`}>{title}</h1>
      <div className={`flex w-full text-black justify-end items-center`}>
        <h1 className={`text-right  text-2xl font-semibold tracking-widest`}>
          {apidata}
        </h1>
        <h1
          className={`text-right text-sm font-mono font-semibold  tracking-widest`}
        >
          (+{appdata})
        </h1>
      </div>
    </div>
  );
}

export default CaseCounts;
