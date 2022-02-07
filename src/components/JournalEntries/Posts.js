import React, { useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([
    {
      title: "test",
      content: "Lorem ipsum",
      date: "12/24/21",
    },
    {
      title: "test2",
      content: "2Lorem ipsum",
      date: "12/26/21",
    },
    {
      title: "Lorem Ipsum sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla felis, tincidunt non ornare a, dictum quis metus. Quisque et leo pretium, euismod massa vel, bibendum nisl. Ut in mi neque. Donec dapibus lorem sem, ut condimentum nunc ultrices id. Nulla facilisi. Etiam a rhoncus lorem. Proin rutrum ullamcorper sem ut varius. Sed fringilla velit ut pretium iaculis. Sed dictum, orci sed fermentum iaculis, libero nunc pretium dui, sit amet gravida diam lacus sed dui. Suspendisse ac nunc congue, suscipit libero sit amet, maximus mauris. Mauris eget enim libero. Aliquam ut justo scelerisque, auctor massa a, tristique nulla. Nulla ut mauris justo.",
      date: "1/4/22",
    },
  ]);
  return (
    <div className={`w-11/12 mx-auto`}>
      {posts.reverse().map((item, index) => (
        <Post
          key={index}
          title={item.title}
          content={item.content}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default Posts;
