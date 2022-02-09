import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import News from "./NewsList/News";
import CovidChart from "./Chart/CovidChart";
import axios from "axios";

function Map() {
  // const [toggleNews, setToggleNews] = useOutletContext();
  // const [newsList, setNewsList] = useState([]);

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

    return () => {
      isApiSubscribed = false;
    };
  }, []);

  // useEffect(() => {
  //   let isApiSubscribed = true;
  //   axios
  //     .get(`/latest-news`, {
  //       headers: { Authorization: sessionStorage.getItem("token") },
  //     })
  //     .then((res) => {
  //       if (isApiSubscribed) {
  //         let updatedlist = [];
  //         res.data.data.articles.forEach((item) => {
  //           if (item.author === null) {
  //             item.author = "unknown author";
  //           }
  //           updatedlist.push({
  //             author: item.author,
  //             title: item.title,
  //             description: item.description,
  //             url: item.url,
  //             urlToImage: item.urlToImage,
  //           });
  //         });
  //         setNewsList(updatedlist);
  //       }
  //     })
  //     .catch((error) => console.log(error));

  //   return () => {
  //     isApiSubscribed = false;
  //   };
  // }, []);

  return (
    <div className={`w-full h-full flex relative`}>
      <div className={`w-full tablet:w-3/4 ease-in-out duration-300 h-full`}>
        <CovidChart />
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
