import React from "react";
import Post from "./Post";

function Posts({ entries, getEntries }) {
  return (
    <div className={`w-11/12 mx-auto`}>
      {entries.map((item, index) => (
        <Post
          key={index}
          title={item.title}
          content={item.content}
          id={item.id}
          getEntries={getEntries}
        />
      ))}
    </div>
  );
}

export default Posts;
