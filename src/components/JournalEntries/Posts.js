import React from "react";
import Post from "./Post";

function Posts({ entries }) {
  return (
    <div className={`w-11/12 mx-auto`}>
      {entries.reverse().map((item, index) => (
        <Post key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Posts;
