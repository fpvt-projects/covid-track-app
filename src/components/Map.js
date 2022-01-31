import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import News from "./NewsList/News";
import axios from "axios";

function Map() {
  const [toggleNews, setToggleNews] = useOutletContext();
  const [newsList, setNewsList] = useState([]);

  const getNews = async () => {
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=ph&apiKey=5442be3d8ce5436ca1bef710be25c49d`
      )
      .then((res) => {
        let updatedlist = [];
        res.data.articles.forEach((item) => {
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
    <div className={`w-full h-full flex`}>
      <div
        className={`${
          toggleNews ? "w-0" : "w-full"
        } tablet:w-3/4 ease-in-out duration-300 h-full`}
      ></div>
      <div
        className={`${
          toggleNews ? "w-full" : "w-0"
        } tablet:w-1/4 ease-in-out duration-300 h-full overflow-y-auto flex justify-center bg-teal-900`}
      >
        <News newsList={newsList} />
      </div>
    </div>
  );
}

export default Map;
