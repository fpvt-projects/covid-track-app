import React from "react";
import { useOutletContext } from "react-router-dom";

function HomeIndex() {
  const [toggleCount, setToggleCount] = useOutletContext();
  return (
    <div className={`w-full h-full flex`}>
      <div
        className={`${
          toggleCount ? "w-0" : "w-full"
        } tablet:w-3/4 ease-in-out duration-300 h-full`}
      ></div>
      <div
        className={`${
          toggleCount ? "w-full" : "w-0"
        } tablet:w-1/4 ease-in-out duration-300 h-full bg-teal-900`}
      ></div>
    </div>
  );
}

export default HomeIndex;
