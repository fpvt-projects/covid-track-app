import React, { useState } from "react";

function Infographics({ imageUrl }) {
  const [toggleImage, setToggleImage] = useState(false);

  const handleClick = () => setToggleImage(!toggleImage);
  return (
    <div
      className={`h-full mr-2 mb-2  ${
        toggleImage
          ? "tablet:fixed absolute w-screen top-0 left-0 bg-black/70 flex justify-center cursor-pointer"
          : "static"
      }`}
      onClick={handleClick}
    >
      <div className={`h-full flex justify-center items-center`}>
        <img
          className={`${
            toggleImage ? "w-11/12 tablet:w-auto mx-auto" : "w-auto"
          }  tablet:h-full  cursor-pointer`}
          src={imageUrl}
        />
      </div>
    </div>
  );
}

export default Infographics;
