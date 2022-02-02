import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import News from "./NewsList/News";
import axios from "axios";

function Map() {
  const [toggleNews, setToggleNews] = useOutletContext();
  const [newsList, setNewsList] = useState([]);

  const getNews = async () => {
    await axios
      .get(`/latest-news`)
      .then((res) => {
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
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className={`w-full h-full flex relative`}>
      <div className={`w-full tablet:w-3/4 ease-in-out duration-300 h-full`}>
        render map here!
      </div>

      <div
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
      </div>
    </div>
  );
}

export default Map;
