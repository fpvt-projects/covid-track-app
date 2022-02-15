import React, { useState, useEffect } from "react";
import Posts from "./JournalEntries/Posts";
import axios from "axios";
import jwt from "jwt-decode";

function Journal() {
  const [entries, setEntries] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  let data = jwt(sessionStorage.getItem("token"));
  let user_id = data.user_id;

  const inputTitle = (e) => setTitle(e.target.value);
  const inputContent = (e) => setContent(e.target.value);

  const handleSubmit = () => {
    if (title === "" || content === "") {
      alert(`Title/content is empty!`);
    } else {
      axios
        .post(
          `/v1/journals`,
          {
            title: title,
            content: content,
            user_id: user_id,
          },
          {
            headers: { Authorization: sessionStorage.getItem("token") },
          }
        )
        .then(() => {
          getEntries();
          setTitle("");
          setContent("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getEntries();
  }, [title === ""]);

  const getEntries = () => {
    axios
      .get(`/v1/journals?user_id=${user_id}`, {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
      .then((res) => {
        let updatedList = [];
        res.data.reverse().forEach((item) => {
          updatedList.push({
            title: item.title,
            content: item.content,
            id: item.id,
            date: item.created_at,
          });
        });
        setEntries(updatedList);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    let isApiSubscribed = true;
    getEntries();
    return () => {
      isApiSubscribed = false;
    };
  }, []);

  return (
    <div className={`w-full h-full flex flex-col items-center`}>
      <div className={`w-11/12  mt-8 flex flex-col items-center`}>
        <div className={`w-full border border-black rounded px-2 pt-2`}>
          <input
            className={`w-full outline-none font-semibold mb-1`}
            type="text"
            placeholder="Entry title"
            onChange={inputTitle}
            value={title}
          />
          <hr className={`border-t-1 border-gray-400`} />
          <textarea
            className={`w-full h-24 resize-none outline-none`}
            placeholder="What's on your mind."
            onChange={inputContent}
            value={content}
          />
          <div className={`w-full text-right`}>
            <button
              id="submitBtn"
              onClick={handleSubmit}
              className={`w-50 px-4 py-2 outline-none border-0 my-2  rounded text-white 
              ${
                title === "" || content === ""
                  ? "bg-gray-300 cursor-default"
                  : "bg-slate-800 cursor-pointer"
              } `}
              disabled={title === "" || content === "" ? true : false}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <hr className={`border-t-1 mt-8 border-gray-400 w-full`} />
      <div className={`w-full h-full overflow-y-auto bg-gray-400 pt-4`}>
        <Posts entries={entries} getEntries={getEntries} />
      </div>
    </div>
  );
}

export default Journal;
