// @flow
import React from "react";
import "./Footer.css";
import girl from "../../assets/dozing.png";

function Footer() {
  function renderGirlDozing() {
    return (
      <div className="Girl-dozing-container">
        <img src={girl} alt="" className="Girl-dozing" />
      </div>
    );
  }

  function renderCredits() {
    return (
      <a
        href="https://github.com/shinelikastar/shinelikastar.github.io"
        className="Footer-credit"
      >
        Designed & Built by Star Su{" "}
        <span role="img" aria-label="star">
          💫
        </span>
        {"  "}
        2020
      </a>
    );
  }

  return (
    <>
      {renderGirlDozing()}
      <footer className="Footer">{renderCredits()}</footer>
    </>
  );
}

export default Footer;
