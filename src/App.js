import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./routes/Home";
import Register from "./routes/Register";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} />} />
        <Route
          path="/covid-tracker-sign_up"
          element={<Register login={login} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
