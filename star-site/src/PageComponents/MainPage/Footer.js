// @flow
import React from "react";
import "./Footer.css";

function Footer() {
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
      <footer className="Footer">{renderCredits()}</footer>
    </>
  );
}

export default Footer;
