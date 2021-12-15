import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.mode === "light" ? "light" : "dark"
        } bg-${props.mode === "light" ? "light" : "dark"}`}
      >
        <Link className="navbar-brand" to="/">
          {props.brandName}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText} <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>

          <Button
            handleClick={props.handleMode}
            mode={props.mode}
            title={` Enable ${props.mode === "light" ? "Dark" : "Light"}Mode`}
          />
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  brandName: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  brandName: "Title",
  aboutText: "About",
};
