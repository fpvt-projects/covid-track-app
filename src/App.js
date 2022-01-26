import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();
  const loginRedirect = () => {
    if (loggedIn == false) {
      navigate("/sign-up");
    }
  };
  useEffect(() => {
    loginRedirect();
  }, []);

  return (
    <div>
      <h1 class="text-lg font-bold">Hello World!</h1>
    </div>
  );
}

export default App;
