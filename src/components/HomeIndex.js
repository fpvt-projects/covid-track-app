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
        <div className={`w-11/12 pt-4 mx-auto bg-white`}>
          <div className={`w-full flex items-center flex-col laptop:flex-row`}>
            <div
              className={`w-full laptop:w-1/2 h-full laptop:h-400 flex justify-center`}
            >
              <InforgrafxCarousel />
            </div>
            <div className={`w-11/12 laptop:w-1/2 p-8`}>
              <h1 className={`text-justify`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                aliquet urna risus, in feugiat nulla sodales in. Mauris
                ullamcorper purus ac risus varius, in rhoncus ligula placerat.
                Etiam imperdiet ultricies velit gravida finibus. Praesent cursus
                sapien leo, non maximus tortor laoreet a. Proin lacinia lectus
                non purus elementum dignissim. Sed hendrerit lacus ut lectus
                cursus vestibulum. Etiam ut ornare lorem. Nullam ante leo,
                interdum sed ornare sit amet, faucibus id purus. Nullam libero
                nunc, faucibus non condimentum vitae, interdum et diam. Sed
                consequat mollis diam vitae pulvinar. Vivamus vel dui risus. In
                hac habitasse platea dictumst. Vivamus vestibulum ex sit amet
                imperdiet ultrices. Morbi in quam non nisi venenatis pretium
                varius et ipsum. Maecenas sodales, sapien eget tincidunt
                ultricies, ligula tellus hendrerit eros, ac blandit nulla elit
                ac nisi. Nullam eu lorem non lacus faucibus aliquam.
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
        } tablet:w-1/4 duration-300 tablet:static h-full absolute right-0 flex flex-col items-center tablet:bg-slate-800 bg-black/50 overflow-x-hidden overflow-y-auto`}
      >
        <h1
          className={`text-center hidden tablet:block text-white text-4xl my-4 font-semibold tracking-widest`}
        >
          NEWS UPDATES
        </h1>
        <div className={`w-full overflow-y-auto flex justify-center z-10`}>
          <News newsList={newsList} />
        </div>
      </div>
    </div>
  );
}

export default HomeIndex;
