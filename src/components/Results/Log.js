import React, { useState } from "react";
import ResultInfo from "./ResultInfo";
import axios from "axios";
import jwt from "jwt-decode";
import { RiVirusFill } from "react-icons/ri";

function Log({ date, status, count, id, result_log_id, setUserState }) {
  const [toggleInfo, setToggleInfo] = useState(false);
  const [toggleAnimatee, setToggleAnimate] = useState(false);

  const [results, setResults] = useState([]);

  const decoded = jwt(sessionStorage.getItem("token"));

  const handleClick = () => {
    getResults();
    setToggleInfo(!toggleInfo);
    setToggleAnimate(!toggleAnimatee);
  };

  const getResults = () => {
    axios
      .get(`/v1/result_logs?user_id=${decoded.user_id}`, {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
      .then((res) => {
        let updatedList = [];
        res.data.forEach((item) => {
          if (item.id === result_log_id) {
            updatedList.push({
              antigen_type: item.antigen_type,
              result: item.result,
              brand: item.brand,
              created_at: item.created_at,
            });
          }
        });
        setResults(updatedList);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      className={`${
        count % 2 === 0
          ? "bg-gradient-to-r from-gray-100 to-gray-200"
          : "bg-white"
      } cursor-pointer hover:bg-gray-100 select-none`}
      onClick={handleClick}
    >
      <div className={`h-12 px-2 flex items-center `}>
        <h1
          className={`mx-2 ${
            status === "Ongoing"
              ? "text-yellow-500"
              : status === "Ended"
              ? "text-green-500"
              : status === "Start"
              ? "text-red-500"
              : "text-blue-500"
          }
          ${toggleAnimatee ? "animate-spin" : "animate-none"}`}
        >
          <RiVirusFill />
        </h1>
        <div className={`flex w-full justify-around`}>
          <div
            className={`w-40 hidden laptop:flex text-sm font-semibold tracking-widest`}
          >
            {date}
          </div>
          <div className={`flex flex-col w-full laptop:w-2/3  `}>
            <h1
              className={`font-semibold whitespace-nowrap`}
            >{`Quarantine Status: ${status}`}</h1>
            <h1
              className={`block laptop:hidden font-semibold text-gray-500 text-xs`}
            >
              {`Date: ${date}`}
            </h1>
          </div>
        </div>
      </div>

      <div className={`${toggleInfo ? "flex" : "hidden"}`}>
        <ResultInfo results={results} count={count} />
      </div>
    </div>
  );
}

export default Log;
