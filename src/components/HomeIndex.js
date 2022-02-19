import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Infographics from "./Infographics/Infographics";
import News from "./NewsList/News";
import InforgrafxCarousel from "../components/Infographics/InforgrafxCarousel";
import doctors from "../assets/doctors.webp";

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
        className={`w-full tablet:w-3/4 duration-300 bg-gray-200 h-full overflow-y-auto`}
      >
        <div className={``}>
          <img alt="" className={`w-full`} src={doctors} />
        </div>

        <div className={`w-full mx-auto bg-white`}>
          <div
            className={`w-full flex items-center flex-col laptop:flex-row  pt-8`}
          >
            <div
              className={`w-full laptop:w-1/2 h-full laptop:h-400 flex justify-center`}
            >
              <InforgrafxCarousel />
            </div>
            <div className={`w-11/12 laptop:w-1/2 p-8`}>
              <h1 className={`font-semibold`}>Covid tracker project 2022</h1>
              <br />{" "}
              <h1 className={`text-justify tracking-widest text-sm`}>
                Coronavirus disease is an infectious disease caused by the
                SARS-CoV2 virus. Most people who fall sick with COVID-19 will
                experience mild to moderate symptoms and recover without special
                treatment. However, some will become seriously ill and require
                medical attention. <br /> <br />
                This project aims to help in collecting covid data from
                consumers that used test-kits bought from online stores. <br />
                <br />
                With this project, users are able to create journal entries to
                help monitor their daily conditions. The project also enable
                users to submit their covid test results in order to help track
                records of covid cases.
              </h1>
            </div>
          </div>

          <div className={`w-full h-auto flex flex-col p-4 `}>
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
      </div>

      <div
        className={`${
          toggleNews ? "w-full" : "w-0"
        } tablet:w-1/4 duration-300 tablet:static h-full absolute right-0 flex flex-col items-center tablet:bg-zinc-200 bg-black/50 overflow-x-hidden overflow-y-auto`}
      >
        <div
          className={`w-full overflow-y-auto overflow-x-hidden flex justify-center z-10 tablet:z-0`}
        >
          <News newsList={newsList} />
        </div>
      </div>
    </div>
  );
}

export default HomeIndex;
