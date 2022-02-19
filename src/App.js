import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Register from "./routes/Register";
import HomeIndex from "./components/HomeIndex";
import HomeTestResultForm from "./components/HomeTestResultForm";
import ResultLog from "./components/ResultLog";
import ChartandNews from "./components/ChartandNews";
import Journal from "./components/Journal";
import UserSettings from "./components/UserSettings";
import axios from "axios";
import "./App.css";
import { useState } from "react";
import EditUserProfile from "./components/settings/EditUserProfile";
import AboutUs from "./components/settings/AboutUs";

// axios.defaults.baseURL = "https://c0v1dtrackingapi.herokuapp.com";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const [resultToggler, setResultToggler] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home resultToggler={resultToggler} />}>
          <Route index element={<HomeIndex />} />
          <Route path="myjournal" element={<Journal />} />
          <Route path="submit-test-result" element={<HomeTestResultForm />} />
          <Route
            path="result-log"
            element={
              <ResultLog
                resultToggler={resultToggler}
                setResultToggler={setResultToggler}
              />
            }
          />
          <Route path="interactive-map" element={<ChartandNews />} />
          <Route path="settings" element={<UserSettings />}>
            <Route index element={<EditUserProfile />} />
            <Route path="about_us" element={<AboutUs />} />
          </Route>
        </Route>
        <Route path="/covid-tracker-sign_up" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
