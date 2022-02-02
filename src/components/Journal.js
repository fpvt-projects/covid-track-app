import React from "react";
import Posts from "./JournalEntries/Posts";

function Journal() {
  return (
    <div className={`w-full h-full flex flex-col items-center`}>
      <div className={`w-11/12 h-40 mt-8 flex flex-col items-center`}>
        <textarea
          className={`w-full h-24 pl-2 resize-none outline-none border border-black rounded`}
          placeholder="What's on your mind."
        />
        <div className={`w-full text-right`}>
          <button
            className={`w-50 px-4 py-2 outline-none border-0 my-2 right-0 rounded text-white hover:bg-teal-700 bg-teal-900`}
          >
            SUBMIT
          </button>
        </div>
      </div>
      <hr className={`border-t-1 border-gray-400 w-full`} />
      <div className={`w-full h-full overflow-y-auto pt-4`}>
        <Posts />
      </div>
    </div>
  );
}

export default Journal;
