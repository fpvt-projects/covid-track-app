import React from "react";
import NewsArticle from "./NewsArticle";

function News({ newsList }) {
  return (
    <div className={`w-4/5`}>
      {newsList.map((news, index) => (
        <NewsArticle
          key={index}
          author={news.author}
          title={news.title}
          url={news.url}
          image={news.urlToImage}
          description={news.description}
        />
      ))}
    </div>
  );
}

export default News;
