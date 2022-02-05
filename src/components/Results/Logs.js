import React, { useState } from "react";
import Log from "./Log";

function Logs() {
  const [Logs, setLogs] = useState([
    {
      date: "1/2/2022",
      status: "Ended",
      results: ["result1", "result2", "result3"],
    },
    {
      date: "1/16/2022",
      status: "Ended",
      results: ["result1", "result2", "result3"],
    },
    {
      date: "1/28/22",
      status: "Ended",
      results: ["result1", "result2", "result3"],
    },
    {
      date: "2/5/22",
      status: "Ongoing",
      results: ["result1", "result2", "result3"],
    },
  ]);
  return (
    <div className={`w-full h-full `}>
      {Logs.reverse().map((item, index) => (
        <Log
          key={index}
          date={item.date}
          status={item.status}
          count={index}
          results={item.results}
        />
      ))}
    </div>
  );
}

export default Logs;
