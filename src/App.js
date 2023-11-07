import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
    };
  }
  colorMode = () => {
    if (this.state.mode === "light") {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      this.setState({
        mode: "dark",
      });
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light");
      this.setState({
        mode: "light",
      });
    }
  };

  render() {
    this.active();
    return (
      <>
        <Router>
          <Navbar mode={this.state.mode} colorMode={this.colorMode} />
          <Routes>
            <Route exact path="/" element={<News key="general" category="general" mode={this.state.mode} />} />
            <Route exact path="/business" element={<News key="business" category="business" mode={this.state.mode} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" mode={this.state.mode} />} />
            <Route exact path="/health" element={<News key="health" category="health" mode={this.state.mode} />} />
            <Route exact path="/science" element={<News key="science" category="science" mode={this.state.mode} />} />
            <Route exact path="/sports" element={<News key="sports" category="sports" mode={this.state.mode} />} />
            <Route exact path="/technology" element={<News key="technology" category="technology" mode={this.state.mode} />} />
          </Routes>
        </Router>
      </>
    );
  }
}
