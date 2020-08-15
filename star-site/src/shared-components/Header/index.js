// @flow
import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div
      className="Header-container"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <p className="Header-text">{props.text}</p>
    </div>
  );
}

export default Header;
