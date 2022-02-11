import React, { useState, useEffect } from "react";
import Result from "./Result";

function ResultInfo({ results, count }) {
  return (
    <div className={`flex flex-col w-full bg-white`}>
      {results.map((item, index) => (
        <Result
          key={index}
          antigen_type={item.antigen_type}
          result={item.result}
          brand={item.brand}
          created_at={item.created_at}
        />
      ))}
    </div>
  );
}

export default ResultInfo;
