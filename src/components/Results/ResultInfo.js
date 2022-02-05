import React from "react";
import Result from "./Result";

function ResultInfo({ results, count }) {
  return (
    <div className={`flex flex-col w-full bg-white`}>
      {results.map((item, index) => (
        <Result key={index} item={item} />
      ))}
    </div>
  );
}

export default ResultInfo;
