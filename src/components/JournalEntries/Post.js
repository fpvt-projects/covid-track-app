import React from "react";

function Post({ title, content }) {
  return (
    <div className={`w-full mb-4 flex flex-col bg-gray-200 p-4 rounded`}>
      <div className={`w-full flex flex-row justify-between mb-4`}>
        <h1 className={`font-semibold`}>{title}</h1>
        {/* <h1 className={`font-semibold select-none`}>{date}</h1> */}
      </div>

      <h1 className={`text-justify`}>{content}</h1>
    </div>
  );
}

export default Post;
