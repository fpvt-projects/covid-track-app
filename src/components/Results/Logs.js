import React from "react";
import Log from "./Log";

function Logs({ qLogs, setUserState }) {
  return (
    <div
      className={`w-full h-full border-0 tablet:border-l-2 border-slate-800 `}
    >
      {qLogs.map((item, index) => (
        <Log
          key={index}
          date={item.date}
          status={item.status}
          count={index}
          id={item.id}
          result_log_id={item.result_log_id}
          setUserState={setUserState}
        />
      ))}
    </div>
  );
}

export default Logs;
