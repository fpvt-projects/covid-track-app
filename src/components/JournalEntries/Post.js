import axios from "axios";
import React, { useState } from "react";
import { MdDelete, MdSaveAlt } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import jwt from "jwt-decode";

function Post({ title, content, id, getEntries, date }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const clickedEdit = () => {
    if (toggleEdit === false) {
      let decoded = jwt(sessionStorage.getItem("token"));

      axios
        .get(`/v1/journals?user_id=${decoded.user_id}`, {
          headers: { Authorization: sessionStorage.getItem("token") },
        })
        .then((res) => {
          res.data.forEach((item) => {
            if (item.id === id) {
              setNewTitle(item.title);
              setNewContent(item.content);
            }
          });
          setToggleEdit(!toggleEdit);
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .patch(
          `/v1/journals/${id}`,
          {
            title: newTitle,
            content: newContent,
          },
          {
            headers: { Authorization: sessionStorage.getItem("token") },
          }
        )
        .then(() => {
          getEntries();
          setToggleEdit(!toggleEdit);
        })
        .catch((error) => console.log(error));
    }
  };

  const clickedDelete = () => {
    const confirm = window.confirm("Are you sure?");

    if (confirm) {
      axios
        .delete(`/v1/journals/${id}`, {
          headers: { Authorization: sessionStorage.getItem("token") },
        })
        .then((res) => getEntries())
        .catch((error) => console.log(error));
    }
  };

  const inputNewTitle = (e) => setNewTitle(e.target.value);
  const inputNewContent = (e) => setNewContent(e.target.value);

  return (
    <div
      className={`w-full mb-4 flex flex-col shadow-lg bg-white p-4 rounded ${
        toggleEdit ? "border border-red-400" : "border-none"
      }`}
    >
      <div
        className={`w-full flex flex-row justify-between mb-4 whitespace-nowrap`}
      >
        <div className={`flex flex-col whitespace-normal w-1/2`}>
          <h1 className={` ${toggleEdit ? "hidden" : "block"} font-semibold`}>
            {title}
          </h1>
          <input
            className={`font-semibold  w-full ${
              toggleEdit ? "block" : "hidden"
            }`}
            type="text"
            value={newTitle}
            onChange={inputNewTitle}
          />
          <h1
            className={`text-xs text-gray-400 font-semibold whitespace-nowrap`}
          >
            {date}
          </h1>
        </div>

        <div className={`ml-2 text-right`}>
          <button
            className={`text-2xl text-gray-400 hover:text-blue-800`}
            onClick={clickedEdit}
          >
            {toggleEdit ? <MdSaveAlt /> : <BiEdit />}
          </button>{" "}
          <button
            className={`text-2xl text-gray-400 hover:text-red-500`}
            onClick={clickedDelete}
          >
            <MdDelete />
          </button>
        </div>
      </div>

      <h1 className={`${toggleEdit ? "hidden" : "block"} text-justify`}>
        {content}
      </h1>
      <textarea
        className={`${toggleEdit ? "block" : "hidden"}  h-40 tablet:h-auto`}
        value={newContent}
        onChange={inputNewContent}
      />
    </div>
  );
}

export default Post;
