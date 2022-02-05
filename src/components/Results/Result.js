import React from "react";

function Result({ item }) {
  return (
    <div
      className={` w-full px-4 flex items-center border-b border-gray-400 hover:bg-gray-300 ease-in duration-150 h-12`}
    >
      {item}
    </div>
  );
}

export default Result;
