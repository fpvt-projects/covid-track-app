import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Register from "./routes/Register";
import HomeIndex from "./components/HomeIndex";
import HomeTestResultForm from "./components/HomeTestResultForm";
import ResultLog from "./components/ResultLog";
import Map from "./components/Map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeIndex />} />
          <Route path="submit-test-result" element={<HomeTestResultForm />} />
          <Route path="result-log" element={<ResultLog />} />
          <Route path="interactive-map" element={<Map />} />
        </Route>
        <Route path="/covid-tracker-sign_up" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
