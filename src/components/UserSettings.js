import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function UserSettings() {
  const navigate = useNavigate();

  const goToEditprofile = () => navigate("/settings");
  const goToAboutus = () => navigate("about_us");
  return (
    <div className={`w-full h-full bg-gray-200`}>
      <div className={`flex flex-col laptop:flex-row w-full h-full p-0`}>
        <nav
          className={`w-full px-4 laptop:pt-4 flex flex-row laptop:flex-col laptop:w-40 h-12 items-center laptop:h-full bg-white`}
        >
          <h1
            className={`hover:bg-gray-200 w-full laptop:ml-0 py-4 px-4 text-xs font-semibold tracking-widest cursor-pointer select-none`}
            onClick={goToEditprofile}
          >
            USER INFORMATION
          </h1>
          <h1
            className={`hover:bg-gray-200 w-full laptop:ml-0 py-4 px-4 text-xs font-semibold tracking-widest cursor-pointer select-none`}
            onClick={goToAboutus}
          >
            ABOUT US
          </h1>
        </nav>
        <div
          className={`w-full laptop:w-2/3 h-full border-t-2 laptop:border-t-0 laptop:border-l-2 flex justify-center bg-white `}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
