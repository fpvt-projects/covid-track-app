import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Home() {
  const [firstname, setFirstname] = useState("Firstname");
  const [lastname, setLastname] = useState("Lastname");

  const [toggleSidebar, setToggleSideBar] = useState(false);

  const showSideBar = () => setToggleSideBar(!toggleSidebar);

  const navigate = useNavigate();

  const loginRedirect = () => {
    if (sessionStorage.getItem("token") === null) {
      navigate("/covid-tracker-sign_up");
    }
  };

  const goToHome = () => {
    showSideBar();
    navigate("/");
  };
  const goTosubmitresult = () => {
    showSideBar();
    navigate("/submit-test-result");
  };
  const goToResultLog = () => {
    showSideBar();
    navigate("/result-log");
  };
  const goTomap = () => {
    showSideBar();
    navigate("/interactive-map");
  };

  const signOut = () => {
    const confirm = window.confirm("Confirm sign out?");

    if (confirm === true) {
      sessionStorage.removeItem("token");
      window.location.reload();
    }
  };

  useEffect(() => {
    loginRedirect();
  });

  return (
    <div className={`flex w-screen h-screen relative flex-col tablet:flex-row`}>
      <div className={`tablet:hidden flex w-full h-14 bg-teal-900`}>
        <div className={`w-1/3 h-full flex justify-center items-center`}>
          <button
            className={`font-semibold text-white select-none`}
            onClick={showSideBar}
          >
            MENU
          </button>
        </div>
      </div>

      {/* -- START OF SIDEBAR -- */}

      <div
        className={`h-full tablet:w-1/5 w-full bg-teal-900 flex-col items-center absolute top-0 tablet:static ${
          toggleSidebar ? "flex" : "hidden"
        } tablet:flex`}
      >
        {/* User details */}
        <div className={`w-full h-40 border-b-2 border-teal-800 flex`}>
          <div className={`w-1/3 h-full flex items-center justify-center`}>
            <div className={`w-16 h-16 bg-cyan-400 rounded-full`}></div>
          </div>
          <div className={`w-2/3 h-full flex flex-col justify-center px-4`}>
            <div>
              <h1 className={`text-white `}>{`${firstname} ${lastname}`}</h1>
            </div>
            <div>
              <h1 className={`text-green-500 font-semibold`}>
                status: NEGATIVE
              </h1>
            </div>
          </div>
        </div>
        <div className={`w-full h-full flex flex-col justify-between`}>
          <div>
            <div
              onClick={goToHome}
              className={`text-white tracking-widest font-semibold hover:bg-cyan-700 w-full py-4 flex cursor-pointer`}
            >
              <div className={`w-1/3`}></div>
              <div className={`w-2/3`}>
                <h1 className={`select-none`}> HOME</h1>
              </div>
            </div>
            <div
              onClick={goTosubmitresult}
              className={`text-white tracking-widest font-semibold hover:bg-cyan-700 w-full py-4 flex cursor-pointer`}
            >
              <div className={`w-1/3`}></div>
              <div className={`w-2/3`}>
                <h1 className={`select-none`}> SUBMIT RESULT</h1>
              </div>
            </div>
            <div
              onClick={goToResultLog}
              className={`text-white tracking-widest font-semibold hover:bg-cyan-700 w-full py-4 flex cursor-pointer`}
            >
              <div className={`w-1/3`}></div>
              <div className={`w-2/3`}>
                <h1 className={`select-none`}> RESULT LOG</h1>
              </div>
            </div>
            <div
              onClick={goTomap}
              className={`text-white tracking-widest font-semibold hover:bg-cyan-700 w-full py-4 flex cursor-pointer`}
            >
              <div className={`w-1/3`}></div>
              <div className={`w-2/3`}>
                <h1 className={`select-none`}>{`MAP & NEWS`}</h1>
              </div>
            </div>
          </div>

          <div>
            <div
              onClick={signOut}
              className={`text-white tracking-widest font-semibold hover:bg-cyan-700 w-full py-4 flex cursor-pointer mb-8`}
            >
              <div className={`w-1/3`}></div>
              <div className={`w-2/3`}>
                <h1 className={`select-none`}> SIGN OUT</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  -- END OF SIDEBAR -- */}

      <div className={`w-full h-full m-auto`}>
        <Outlet />
      </div>
      {/* <div
        className={
          "h-4 w-full bg-slate-800 flex justify-center absolute bottom-0 items-center py-2"
        }
      >
        <h1 className={"text-center text-white text-xs"}>
          This website is intended for learning purpose only.
        </h1>
      </div> */}
    </div>
  );
}

export default Home;
