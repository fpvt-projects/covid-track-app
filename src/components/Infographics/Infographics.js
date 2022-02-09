import React, { useState } from "react";

function Infographics({ imageUrl }) {
  const [toggleImage, setToggleImage] = useState(false);

  const handleClick = () => setToggleImage(!toggleImage);
  return (
    <div
      className={`h-full mr-2 mb-2 ${
        toggleImage
          ? "tablet:fixed absolute w-screen h-auto laptop:h-screen top-0 left-0 bg-black/50 flex justify-center cursor-pointer"
          : "static"
      }`}
      onClick={handleClick}
    >
      <img className={`h-full cursor-pointer`} src={imageUrl} />
    </div>
  );
}

export default Infographics;
