import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import ScrollToTop from "react-scroll-to-top";
import UpArrow from "./components/UpArrow";

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);

  const colorMode = () => {
    if (mode === "light") {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      setMode({
        mode: "dark",
      });
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light");
      setMode({
        mode: "light",
      });
    }
  };

  return (
    <>
      <Router>
        <ScrollToTop smooth viewBox="0 0 24 24" component={<UpArrow />} />
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar mode={mode} colorMode={colorMode} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" category="general" mode={mode} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" category="business" mode={mode} />} />
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={setProgress} apikey={apikey} key="entertainment" category="entertainment" mode={mode} />}
          />
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" category="health" mode={mode} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" category="science" mode={mode} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" category="sports" mode={mode} />} />
          <Route
            exact
            path="/technology"
            element={<News setProgress={setProgress} apikey={apikey} key="technology" category="technology" mode={mode} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
