import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Register from "./routes/Register";
import HomeIndex from "./components/HomeIndex";
import HomeTestResultForm from "./components/HomeTestResultForm";
import ResultLog from "./components/ResultLog";
import ChartandNews from "./components/ChartandNews";
import Journal from "./components/Journal";
import axios from "axios";
import "./App.css";
import { useState } from "react";

axios.defaults.baseURL = "https://c0v1dtrackingapi.herokuapp.com";

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
        </Route>
        <Route path="/covid-tracker-sign_up" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
