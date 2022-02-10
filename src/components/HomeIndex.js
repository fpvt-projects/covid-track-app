import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Infographics from "./Infographics/Infographics";
import News from "./NewsList/News";
import axios from "axios";

function HomeIndex() {
  const [toggleNews, setToggleNews] = useOutletContext();
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    let isApiSubscribed = true;
    axios
      .get(`/latest-news`, {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
      .then((res) => {
        if (isApiSubscribed) {
          let updatedlist = [];
          res.data.data.articles.forEach((item) => {
            if (item.author === null) {
              item.author = "unknown author";
            }
            updatedlist.push({
              author: item.author,
              title: item.title,
              description: item.description,
              url: item.url,
              urlToImage: item.urlToImage,
            });
          });
          setNewsList(updatedlist);
        }
      })
      .catch((error) => console.log(error));

    return () => {
      isApiSubscribed = false;
    };
  }, []);

  return (
    <div className={`w-full h-full relative flex`}>
      <div
        className={`w-full tablet:w-3/4 duration-300 h-full overflow-y-auto`}
      >
        <div className={`w-full h-auto flex flex-col p-4 `}>
          <h1 className={`tracking-widest font-semibold`}>Covid Preventions</h1>
          <hr className={`w-full border-t-2 border-black my-2`} />
          <div className={`h-60 flex flex-wrap overflow-y-auto mb-4`}>
            <Infographics
              imageUrl={
                "https://decoda.ca/wp-content/uploads/Physical-distancing-infographic-791x1024-1.jpg"
              }
            />
            <Infographics
              imageUrl={
                "https://www.paho.org/en/file/61942/download?token=VhIwWVVD"
              }
            />
            <Infographics
              imageUrl={
                "https://www.who.int/images/default-source/wpro/countries/malaysia/infographics/adolescent-and-covid-19/adolescents-and-covid-19-page-4.png?sfvrsn=1ffc3747_2"
              }
            />
            <Infographics
              imageUrl={
                "https://www.who.int/images/default-source/wpro/countries/philippines/emergencies/covid-19/avoid-the-3cs/slide1.png"
              }
            />
            <Infographics
              imageUrl={
                "https://www.who.int/images/default-source/wpro/countries/philippines/emergencies/covid-19/bahaynihan/stay-at-home-flier-eng-a5-with-branding.png"
              }
            />
          </div>

          <h1 className={`tracking-widest font-semibold`}>
            Symptoms & Variants
          </h1>
          <hr className={`w-full border-t-2 border-black my-2`} />
          <div className={`h-60 flex flex-wrap overflow-y-auto mb-4`}>
            <Infographics
              imageUrl={
                "https://www.who.int/images/default-source/health-topics/coronavirus/covid19-infographic-symptoms-final.tmb-549v.png?sfvrsn=57850cbc_2"
              }
            />
            <Infographics
              imageUrl={
                "https://www.who.int/images/default-source/wpro/health-topic/covid-19/slide670899bc1-e7db-45e0-903c-b70fb7a001d5.png?sfvrsn=32b3f631_4"
              }
            />
            <Infographics
              imageUrl={
                "https://sacoronavirus.b-cdn.net/wp-content/uploads/2021/11/omicron-infographic.jpg"
              }
            />
          </div>
        </div>
      </div>

      <div
        className={`${
          toggleNews ? "w-full" : "w-0"
        } tablet:w-1/4 duration-300 tablet:static h-full absolute right-0 flex flex-col items-center tablet:bg-slate-800 bg-black/50 overflow-x-hidden overflow-y-auto`}
      >
        <h1
          className={`text-center hidden tablet:block text-white text-4xl my-4 font-semibold tracking-widest`}
        >
          NEWS UPDATES
        </h1>
        <div className={`w-full overflow-y-auto flex justify-center`}>
          <News newsList={newsList} />
        </div>
      </div>
      {/* <div
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
      </div> */}
    </div>
  );
}

export default HomeIndex;
