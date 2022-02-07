import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

function HomeIndex() {
  const [toggleCount, setToggleCount] = useOutletContext();
  const [apiTotalcount, setApiTotalcount] = useState("");
  const [adpiTotalrecover, setApiTotalrecover] = useState("");
  const [apiDailynewcases, setApiDailynewcases] = useState("");
  const [apiDailynewrecoveries, setApiDailynewrecoveries] = useState("");
  const [apiActivecases, setApiActivecases] = useState("");

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
      .get("/covid-data")
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

    return () => {
      isApiSubscribed = false;
    };
  }, []);

  return (
    <div className={`w-full h-full relative flex`}>
      <div className={`w-full tablet:w-3/4 duration-300 h-full`}>
        render home index heree!
      </div>
      <div
        className={`${
          toggleCount ? "w-full" : "w-0"
        } tablet:w-1/4 duration-300 tablet:static h-full absolute right-0 flex flex-col items-center tablet:bg-teal-900 bg-black/50 overflow-x-hidden overflow-y-auto`}
      >
        <div
          className={`w-11/12 h-24 bg-gradient-to-br from-cyan-700 to-cyan-800 rounded mt-8 shadow-2xl flex flex-col justify-center px-4`}
        >
          <h1 className={`font-semibold text-white text-m`}>Total cases:</h1>
          <h1 className={`font-semibold text-right text-white text-2xl`}>
            {apiTotalcount} (+123)
          </h1>
        </div>
        <div
          className={`w-11/12 h-24 bg-gradient-to-br from-cyan-700 to-cyan-800 rounded mt-4 shadow-2xl flex flex-col justify-center px-4`}
        >
          <h1 className={`font-semibold text-white text-m`}>
            Total recoveries:
          </h1>
          <h1 className={`font-semibold text-right text-white text-2xl`}>
            {adpiTotalrecover} (+1234)
          </h1>
        </div>
        <div
          className={`w-11/12 h-24 bg-gradient-to-br from-cyan-700 to-cyan-800 rounded mt-4 shadow-2xl flex flex-col justify-center px-4`}
        >
          <h1 className={`font-semibold text-white text-m`}>Active cases:</h1>
          <h1 className={`font-semibold text-right text-white text-2xl`}>
            {apiActivecases} (+23)
          </h1>
        </div>
        <div
          className={`w-11/12 h-24 bg-gradient-to-br from-cyan-700 to-cyan-800 rounded mt-4 shadow-2xl flex flex-col justify-center px-4`}
        >
          <h1 className={`font-semibold text-white text-m`}>
            Daily new cases:
          </h1>
          <h1 className={`font-semibold text-right text-white text-2xl`}>
            {apiDailynewcases} (+23)
          </h1>
        </div>
        <div
          className={`w-11/12 h-24 bg-gradient-to-br from-cyan-700 to-cyan-800 rounded mt-4 shadow-2xl flex flex-col justify-center px-4`}
        >
          <h1 className={`font-semibold text-white text-m`}>
            Daily recovered:
          </h1>
          <h1 className={`font-semibold text-right text-white text-2xl`}>
            {apiDailynewrecoveries} (+12)
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomeIndex;
