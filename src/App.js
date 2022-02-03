import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Register from "./routes/Register";
import HomeIndex from "./components/HomeIndex";
import HomeTestResultForm from "./components/HomeTestResultForm";
import ResultLog from "./components/ResultLog";
import ChartandNews from "./components/ChartandNews";
import Journal from "./components/Journal";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeIndex />} />
          <Route path="myjournal" element={<Journal />} />
          <Route path="submit-test-result" element={<HomeTestResultForm />} />
          <Route path="result-log" element={<ResultLog />} />
          <Route path="interactive-map" element={<ChartandNews />} />
        </Route>
        <Route path="/covid-tracker-sign_up" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
