import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import maleAvatar from "../assets/maleAvatar.png";
import femaleAvatar from "../assets/femaleAvatar.png";
import { AiOutlineHome } from "react-icons/ai";
import { BsJournalBookmark } from "react-icons/bs";
import { BsJournalPlus } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import axios from "axios";
import jwt from "jwt-decode";

function Home({ resultToggler }) {
  const [currentUser, setCurrentUser] = useState([]);
  const [userStatus, setUserStatus] = useState("");
  const [gender, setGender] = useState("");

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
  const goTosettings = () => {
    setDisplayNewsButton(false);
    setDisplayCountButton(false);
    showSideBar();
    navigate("/settings");
  };

  const loginRedirect = () => {
    if (sessionStorage.getItem("token") === null) {
      navigate("/covid-tracker-sign_up");
    } else {
      const user = jwt(sessionStorage.getItem("token"));
      setCurrentUser({
        email: user.email,
        lastname: user.lastname,
        firstname: user.firstname,
        user_id: user.user_id,
      });
      axios
        .get(`v1/users`, {
          headers: {
            Authorization: sessionStorage.getItem("token"),
          },
        })
        .then((res) => {
          res.data.forEach((item) => {
            if (item.account_id === user.sub) {
              setGender(item.gender);
            }
          });
        })
        .catch((error) => console.log(error));
      getResults();
    }
  };

  const getResults = () => {
    const decoded = jwt(sessionStorage.getItem("token"));
    axios
      .get(`/v1/result_logs?user_id=${decoded.user_id}`, {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
      .then((res) => {
        setUserStatus(res.data.slice(-1)[0].result);
      })
      .catch((error) => console.log(error));
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
    if (sessionStorage.getItem("token") !== null) {
      getResults();
    }
  }, [resultToggler]);

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
                src={gender === "Male" ? maleAvatar : femaleAvatar}
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
                  className={`text-white font-semibold text-xs py-0.5 ${
                    userStatus === "Positive" ? "bg-red-600" : "bg-green-600"
                  } rounded-xl`}
                >
                  {userStatus === "Positive" ? "POSITIVE" : "NEGATIVE"}
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
              <div className={`w-1/3 flex justify-center items-center`}>
                <h1 className={`text-white text-lg`}>
                  <AiOutlineHome />
                </h1>
              </div>
              <div className={`w-2/3`}>
                <h1 className={`select-none`}> HOME</h1>
              </div>
            </div>
            <div
              onClick={goTojournal}
              className={`text-white tracking-widest font-semibold hover:bg-cyan-700 w-full py-4 flex cursor-pointer`}
            >
              <div className={`w-1/3 flex justify-center items-center`}>
                <BsJournalBookmark />
              </div>
              <div className={`w-2/3`}>
                <h1 className={`select-none`}> MY JOURNAL</h1>
              </div>
            </div>
            {/* <div
              onClick={goTosubmitresult}
              className={`text-white tracking-widest font-semibold hover:bg-cyan-700 w-full py-4 flex cursor-pointer`}
            >
              <div className={`w-1/3`}></div>
              <div className={`w-2/3`}>
                <h1 className={`select-none`}> SUBMIT RESULT</h1>
              </div>
            </div> */}
            <div
              onClick={goToResultLog}
              className={`text-white tracking-widest font-semibold hover:bg-cyan-700 w-full py-4 flex cursor-pointer`}
            >
              <div className={`w-1/3 flex justify-center items-center`}>
                <BsJournalPlus />
              </div>
              <div className={`w-2/3`}>
                <h1 className={`select-none`}> MY RESULT</h1>
              </div>
            </div>
            <div
              onClick={goTomap}
              className={`text-white tracking-widest font-semibold hover:bg-cyan-700 w-full py-4 flex cursor-pointer`}
            >
              <div className={`w-1/3 flex justify-center items-center`}>
                <AiOutlineBarChart />
              </div>
              <div className={`w-2/3`}>
                <h1 className={`select-none`}>{`CHART & COUNTS`}</h1>
              </div>
            </div>
            <div
              onClick={goTosettings}
              className={`text-white tracking-widest font-semibold hover:bg-cyan-700 w-full py-4 flex cursor-pointer`}
            >
              <div className={`w-1/3 flex justify-center items-center`}>
                <IoSettingsOutline />
              </div>
              <div className={`w-2/3`}>
                <h1 className={`select-none`}>{`SETTINGS`}</h1>
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
          "h-4 w-full bg-slate-800 flex flex-col tablet:flex-row justify-center absolute bottom-0 items-center py-2"
        }
      >
        <a
          className={`ml-2 text-white text-xs`}
          href="https://www.freepik.com/vectors/medical"
        >
          Medical vector created by stories - www.freepik.com
        </a>
      </div>
    </div>
  );
}

export default Home;
