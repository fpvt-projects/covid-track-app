import React from "react";

function NewsArticle({ author, description, url, image, title }) {
  return (
    <div className={`w-full bg-white my-1 p-4 flex flex-col`}>
      <img src={image} />
      <h1 className={`font-semibold text-lg`}>{title}</h1>
      <h1 className={`italic mb-4`}>- {author}</h1>
      <h1>{description}</h1>
      <a
        target="_blank"
        href={url}
        className={`cursor-pointer whitespace-normal font-semibold mt-4 hover:text-blue-800`}
      >
        MORE INFO!
      </a>
    </div>
  );
}

export default NewsArticle;
