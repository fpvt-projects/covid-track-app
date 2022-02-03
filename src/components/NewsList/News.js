import React from "react";
import NewsArticle from "./NewsArticle";

function News({ newsList }) {
  return (
    <div className={`w-5/6 border-0 rounded`}>
      {newsList.map((news, index) => (
        <NewsArticle
          key={index}
          author={news.author}
          title={news.title}
          url={news.url}
          urlToimg={news.urlToImage}
          description={news.description}
        />
      ))}
    </div>
  );
}

export default News;
