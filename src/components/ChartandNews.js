import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CovidChart from "./Chart/CovidChart";
import axios from "axios";

function Map() {
  const [toggleCount, setToggleCount] = useOutletContext();
  const [apiTotalcount, setApiTotalcount] = useState("");
  const [adpiTotalrecover, setApiTotalrecover] = useState("");
  const [apiDailynewcases, setApiDailynewcases] = useState("");
  const [apiDailynewrecoveries, setApiDailynewrecoveries] = useState("");
  const [apiActivecases, setApiActivecases] = useState("");

  const [total_case, setTotal_Case] = useState("");
  const [active_cases, setActive_Cases] = useState("");
  const [daily_new, setDaily_New] = useState("");
  const [total_recover, setTotal_Recover] = useState("");
  const [daily_recover, setDaily_Recover] = useState("");

  const commafy = (num) => {
    var str = num.toString().split(".");
    if (str[0].length >= 4) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 4) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  };

  useEffect(() => {
    let isApiSubscribed = true;
    axios
      .get("/covid-data", {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
      .then((res) => {
        if (isApiSubscribed) {
          setApiTotalcount(commafy(res.data.data.cases));
          setApiTotalrecover(commafy(res.data.data.recovered));
          setApiDailynewrecoveries(commafy(res.data.data.todayRecovered));
          setApiDailynewcases(commafy(res.data.data.todayCases));
          setApiActivecases(commafy(res.data.data.active));
        }
      })
      .catch((error) => console.log(error));

    axios
      .get(`/v1/case_counts`)
      .then((res) => {
        if (isApiSubscribed) {
          setTotal_Case(res.data.total_cases);
          setActive_Cases(res.data.active_cases);
          setDaily_New(res.data.daily_new);
          setTotal_Recover(res.data.total_recoveries);
          setDaily_Recover(res.data.daily_recovered);
        }
      })
      .catch((error) => console.log(error));
    return () => {
      isApiSubscribed = false;
    };
  }, []);

  return (
    <div className={`w-full h-full flex relative`}>
      <div className={`w-full tablet:w-3/4 ease-in-out duration-300 h-full`}>
        <CovidChart />
      </div>

      <div
        className={`${
          toggleCount ? "w-full" : "w-0"
        } tablet:w-1/4 duration-300 tablet:static h-full absolute right-0 flex flex-col items-center tablet:bg-slate-800 bg-black/60 overflow-x-hidden overflow-y-auto`}
      >
        <div
          className={`w-11/12 h-24 bg-gradient-to-br from-cyan-700 to-cyan-800 rounded mt-8 shadow-2xl flex flex-col justify-center px-4`}
        >
          <h1 className={`font-semibold text-white text-m`}>Total cases:</h1>
          <h1 className={`font-semibold text-right text-white text-2xl`}>
            {apiTotalcount} (+{total_case})
          </h1>
        </div>
        <div
          className={`w-11/12 h-24 bg-gradient-to-br from-cyan-700 to-cyan-800 rounded mt-4 shadow-2xl flex flex-col justify-center px-4`}
        >
          <h1 className={`font-semibold text-white text-m`}>
            Total recoveries:
          </h1>
          <h1 className={`font-semibold text-right text-white text-2xl`}>
            {adpiTotalrecover} (+{total_recover})
          </h1>
        </div>
        <div
          className={`w-11/12 h-24 bg-gradient-to-br from-cyan-700 to-cyan-800 rounded mt-4 shadow-2xl flex flex-col justify-center px-4`}
        >
          <h1 className={`font-semibold text-white text-m`}>Active cases:</h1>
          <h1 className={`font-semibold text-right text-white text-2xl`}>
            {apiActivecases} (+{active_cases})
          </h1>
        </div>
        <div
          className={`w-11/12 h-24 bg-gradient-to-br from-cyan-700 to-cyan-800 rounded mt-4 shadow-2xl flex flex-col justify-center px-4`}
        >
          <h1 className={`font-semibold text-white text-m`}>
            Daily new cases:
          </h1>
          <h1 className={`font-semibold text-right text-white text-2xl`}>
            {apiDailynewcases} (+{daily_new})
          </h1>
        </div>
        <div
          className={`w-11/12 h-24 bg-gradient-to-br from-cyan-700 to-cyan-800 rounded mt-4 shadow-2xl flex flex-col justify-center px-4`}
        >
          <h1 className={`font-semibold text-white text-m`}>
            Daily recovered:
          </h1>
          <h1 className={`font-semibold text-right text-white text-2xl`}>
            {apiDailynewrecoveries} (+{daily_recover})
          </h1>
        </div>
      </div>

      {/* <div
        className={`${
          toggleNews ? "w-full" : "w-0"
        } tablet:w-1/4 duration-300 tablet:static h-full absolute right-0 flex flex-col items-center tablet:bg-teal-900 bg-black/50 overflow-x-hidden overflow-y-auto`}
      >
        <h1
          className={`text-center hidden tablet:block text-white text-4xl my-4 font-semibold tracking-widest`}
        >
          NEWS UPDATES
        </h1>
        <div className={`w-full overflow-y-auto flex justify-center`}>
          <News newsList={newsList} />
        </div>
      </div> */}
    </div>
  );
}

export default Map;
