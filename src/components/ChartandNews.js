import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CovidChart from "./Chart/CovidChart";
import axios from "axios";
import CaseCounts from "./CaseCounts/CaseCounts";
import Cases from "./CaseCounts/Cases";

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
        <h1
          className={`text-sm tracking-wides font-semibold text-gray-400 text-center`}
        >
          ** static only, no available data for now**
        </h1>
      </div>

      <div
        className={`${
          toggleCount ? "w-full" : "w-0"
        } tablet:w-1/3 duration-300 tablet:static h-full absolute right-0 flex flex-col items-center tablet:bg-slate-800 bg-black/60 overflow-x-hidden overflow-y-auto`}
      >
        <Cases
          apiTotalcount={apiTotalcount}
          total_case={total_case}
          apiActivecases={apiActivecases}
          active_cases={active_cases}
          apiDailynewcases={apiDailynewcases}
          daily_new={daily_new}
          adpiTotalrecover={adpiTotalrecover}
          total_recover={total_recover}
          apiDailynewrecoveries={apiDailynewrecoveries}
          daily_recover={daily_recover}
        />
        {/* <CaseCounts
          apidata={apiTotalcount}
          appdata={total_case}
          title="Total cases:"
        />
        <CaseCounts
          apidata={adpiTotalrecover}
          appdata={total_recover}
          title="Total recoveries:"
        />
        <CaseCounts
          apidata={apiActivecases}
          appdata={active_cases}
          title="Active cases:"
        />
        <CaseCounts
          apidata={apiDailynewcases}
          appdata={daily_new}
          title="Daily new cases:"
        />
        <CaseCounts
          apidata={apiDailynewrecoveries}
          appdata={daily_recover}
          title="Daily recovered:"
        /> */}
      </div>
    </div>
  );
}

export default Map;
