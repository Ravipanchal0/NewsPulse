import React from "react";
import { Link } from "react-router-dom";
import Darkmode from "./Darkmode";
import Lightmode from "./Lightmode";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand font-weight-bold" to="/">
            NewsPulse
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <button type="button" className={`mx-3 btn-outline-none border-0 bg-transparent`} onClick={props.colorMode}>
              {props.mode === "light" ? <Darkmode /> : <Lightmode />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
