import axios from "axios";
import React, { useState } from "react";

function Post({ title, content, id, getEntries }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const clickedEdit = () => {
    if (toggleEdit === false) {
      setToggleEdit(!toggleEdit);
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
          window.location.reload();
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
        .then((res) => window.location.reload())
        .catch((error) => console.log(error));
    }
  };

  const inputNewTitle = (e) => setNewTitle(e.target.value);
  const inputNewContent = (e) => setNewContent(e.target.value);

  return (
    <div
      className={`w-full mb-4 flex flex-col bg-gray-200 p-4 rounded ${
        toggleEdit ? "border border-red-400" : "border-none"
      }`}
    >
      <div className={`w-full flex flex-row justify-between mb-4`}>
        <h1 className={` ${toggleEdit ? "hidden" : "block"} font-semibold`}>
          {title}
        </h1>
        <input
          className={`font-semibold bg-gray-200 ${
            toggleEdit ? "block" : "hidden"
          }`}
          type="text"
          value={newTitle}
          onChange={inputNewTitle}
        />
        <div className={`text-right`}>
          <button onClick={clickedEdit}>{toggleEdit ? "Save" : "Edit"}</button>{" "}
          <button onClick={clickedDelete}>Delete</button>
        </div>
      </div>

      <h1 className={`${toggleEdit ? "hidden" : "block"} text-justify`}>
        {content}
      </h1>
      <textarea
        className={`${
          toggleEdit ? "block" : "hidden"
        } bg-gray-200 h-40 tablet:h-auto`}
        value={newContent}
        onChange={inputNewContent}
      />
    </div>
  );
}

export default Post;
