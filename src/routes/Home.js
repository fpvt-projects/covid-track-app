import React, { useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

function Home({ loggedIn }) {
  const navigate = useNavigate();

  const loginRedirect = () => {
    if (loggedIn === false) {
      navigate("/covid-tracker-sign_up");
    }
  };
  const goToHome = () => navigate("/");
  const goTosubmitresult = () => navigate("/submit-test-result");

  // useEffect(() => {
  //   loginRedirect();
  // });

  return (
    <div className={`flex`}>
      {/* -- START OF SIDEBAR -- */}
      <div className={`h-screen w-1/6 bg-teal-900 flex flex-col items-center`}>
        {/* User details */}
        <div className={`w-full h-40 border-b-2 border-teal-800 flex`}>
          <div className={`w-1/3 h-full flex items-center justify-center`}>
            <div className={`w-20 h-20 bg-cyan-400 rounded-full`}></div>
          </div>
          <div className={`w-2/3 h-full flex flex-col justify-center`}>
            <div>
              <h1 className={`text-white`}>useremail1@gmail.com</h1>
            </div>
            <div>
              <h1 className={`text-green-500`}>status: NEGATIVE</h1>
            </div>
          </div>
        </div>
        <div
          onClick={goToHome}
          className={`text-white tracking-widest font-semibold hover:bg-cyan-700 w-full py-4 flex cursor-pointer`}
        >
          <div className={`w-1/3`}></div>
          <div className={`w-2/3`}>
            <h1> HOME</h1>
          </div>
        </div>
        <div
          onClick={goTosubmitresult}
          className={`text-white tracking-widest font-semibold hover:bg-cyan-700 w-full py-4 flex cursor-pointer`}
        >
          <div className={`w-1/3`}></div>
          <div className={`w-2/3`}>
            <h1> SUBMIT RESULT</h1>
          </div>
        </div>
      </div>
      {/*  -- END OF SIDEBAR -- */}
      <div className={`w-5/6`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
