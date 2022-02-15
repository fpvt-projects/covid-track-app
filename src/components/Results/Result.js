import React from "react";

function Result({ antigen_type, result, brand, created_at }) {
  return (
    <div
      className={` w-full  px-4 pl-12 flex flex-col laptop:flex-row  justify-around items-start laptop:items-center  hover:bg-gray-300 ease-in duration-150 h-auto laptop:h-12`}
    >
      <div className={`font-semibold flex`}>
        <h1 className={`mr-2 text-gray-500`}>Date:</h1>
        {created_at}
      </div>
      <div className={`font-semibold flex`}>
        <h1 className={`mr-2 text-gray-500`}>Antigen Type:</h1>
        {antigen_type}
      </div>
      <div className={`font-semibold flex`}>
        <h1 className={`mr-2 text-gray-500`}>Brand: </h1>
        {brand}
      </div>
      <div className={`font-semibold flex`}>
        <h1 className={`mr-2 text-gray-500`}>Result:</h1>
        {result}
      </div>
    </div>
  );
}

export default Result;
