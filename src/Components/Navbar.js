import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function navbar(props) {
  let myStyle, icon;
  if (props.mode === "light") {
    myStyle = {
      color: "orange",
      fontSize: "1.5rem",
    };
    icon = "bi bi-moon-stars-fill";
  } else {
    myStyle = {
      color: "yellow",
      fontSize: "1.5rem",
    };
    icon = "bi bi-brightness-high-fill";
  }
  return (
    <>
      <nav
        className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode}`}
        fixed-top
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <i style={myStyle} onClick={props.toggleMode} class={icon}></i>
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className="d-flex me-4">
              <i
                style={myStyle}
                onClick={props.toggleMode}
                className={icon}
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
navbar.defaultProps = {
  title: "Text edits",
  about: "About me",
};
