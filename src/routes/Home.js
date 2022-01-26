import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home({ loggedIn }) {
  const navigate = useNavigate();

  const loginRedirect = () => {
    if (loggedIn === false) {
      navigate("/sign-up");
    }
  };
  useEffect(() => {
    loginRedirect();
  }, []);
  return (
    <div>
      <h1>This is from home!</h1>
    </div>
  );
}

export default Home;
