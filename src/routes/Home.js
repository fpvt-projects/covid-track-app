import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import maleAvatar from "../assets/maleAvatar.png";
import femaleAvatar from "../assets/femaleAvatar.png";
import jwt from "jwt-decode";

function Home() {
  const [currentUser, setCurrentUser] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const gender = "male";

  const [toggleSidebar, setToggleSideBar] = useState(false);
  const [displayCountButton, setDisplayCountButton] = useState(false);
  const [displayNewsButton, setDisplayNewsButton] = useState(true);
  const [toggleCount, setToggleCount] = useState(false);
  const [toggleNews, setToggleNews] = useState(false);

  const showSideBar = () => setToggleSideBar(!toggleSidebar);
  const showCounts = () => setToggleCount(!toggleCount);
  const showNews = () => setToggleNews(!toggleNews);

  const navigate = useNavigate();

  const goToHome = () => {
    setDisplayCountButton(false);
    setDisplayNewsButton(true);
    showSideBar();
    navigate("/");
  };
  const goTojournal = () => {
    setDisplayCountButton(false);
    setDisplayNewsButton(false);
    showSideBar();
    navigate("/myjournal");
  };
  const goTosubmitresult = () => {
    setDisplayCountButton(false);
    setDisplayNewsButton(false);
    showSideBar();
    navigate("/submit-test-result");
  };
  const goToResultLog = () => {
    setDisplayCountButton(false);
    setDisplayNewsButton(false);
    showSideBar();
    navigate("/result-log");
  };
  const goTomap = () => {
    setDisplayNewsButton(false);
    setDisplayCountButton(true);
    showSideBar();
    navigate("/interactive-map");
  };

  const loginRedirect = () => {
    if (sessionStorage.getItem("token") === null) {
      navigate("/covid-tracker-sign_up");
    } else {
      const user = jwt(sessionStorage.getItem("token"));
      setCurrentUser({
        id: user.id,
        email: user.email,
        user_id: user.user_id,
        firstname: user.firstname,
        lastname: user.lastname,
        gender: user.gender,
      });
    }
  };
  const signOut = () => {
    const confirm = window.confirm("Confirm sign out?");
    if (confirm === true) {
      sessionStorage.removeItem("token");
      navigate("/");
      window.location.reload();
    }
  };

  useEffect(() => {
    loginRedirect();
  }, []);

  return (
    <div className={`flex w-screen h-screen relative flex-col tablet:flex-row`}>
      <div
        className={`tablet:hidden flex justify-between w-full h-14 bg-slate-800`}
      >
        <div className={`w-1/3 h-full flex justify-center items-center`}>
          <button
            className={`font-semibold text-white select-none`}
            onClick={showSideBar}
          >
            MENU
          </button>
        </div>
        <div className={`w-1/3 h-full flex justify-center items-center`}>
          <button
            className={`${
              displayCountButton ? "block" : "hidden"
            } font-semibold text-white select-none`}
            onClick={showCounts}
          >
            COUNTS
          </button>
          <button
            className={`${
              displayNewsButton ? "block" : "hidden"
            } font-semibold text-white select-none`}
            onClick={showNews}
          >
            NEWS
          </button>
        </div>
      </div>

      {/* -- START OF SIDEBAR -- */}

      <div
        className={`h-full tablet:w-1/5 w-full bg-slate-800 flex-col items-center z-10 tablet:z-0 absolute top-0 tablet:static ${
          toggleSidebar ? "flex" : "hidden"
        } tablet:flex`}
      >
        {/* User details */}
        <div className={`w-full h-40 border-b-2 bg-slate-700 flex`}>
          <div className={`flex w-11/12 mx-auto`}>
            <div className={`w-1/3 h-full flex items-center justify-center`}>
              <img
                className={`w-20 `}
                src={currentUser.gender === "Male" ? maleAvatar : femaleAvatar}
                alt="male"
              />
            </div>
            <div className={`w-2/3 h-full flex flex-col justify-center`}>
              <div>
                <h1
                  className={`font-bold text-white text-xl`}
                >{`${currentUser.lastname}, ${currentUser.firstname}`}</h1>
              </div>
              <div>
                <h1 className={`text-white text-xs tracking-widest`}>
                  {currentUser.email}
                </h1>
              </div>
              <div className={`w-20 text-center mt-4 select-none`}>
                <h1
                  className={`text-white font-semibold text-xs py-0.5 bg-green-600 rounded-xl`}
                >
                  NEGATIVE
                </h1>
              </div>
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
              onClick={goTojournal}
              className={`text-white tracking-widest font-semibold hover:bg-cyan-700 w-full py-4 flex cursor-pointer`}
            >
              <div className={`w-1/3`}></div>
              <div className={`w-2/3`}>
                <h1 className={`select-none`}> MY JOURNAL</h1>
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
                <h1 className={`select-none`}>{`CHART & COUNTS`}</h1>
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

      <div className={`w-full h-full m-auto overflow-hidden`}>
        <Outlet
          context={
            displayCountButton
              ? [toggleCount, setToggleCount]
              : [toggleNews, setToggleNews]
          }
        />
      </div>
      <div
        className={
          "h-4 w-full bg-slate-800 flex justify-center absolute bottom-0 items-center py-2"
        }
      >
        <h1 className={"text-center text-white text-xs"}>
          This website is intended for learning purpose only.
        </h1>
      </div>
    </div>
  );
}

export default Home;
