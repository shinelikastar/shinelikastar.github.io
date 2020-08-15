// @flow
import React from "react";

import girl from "../../assets/diva.png";
import "./MainPage.css";

import WorkPage from "../WorkPage";
import Footer from "./Footer";
import Experience from "../Experience";
import WritingPage from "../WritingPage";
import About from "../About";
import TopButton from "../../shared-components/TopButton/";

function MainPage() {
  function renderWelcome() {
    return (
      <header className="App-header">
        <div className="Girl-container">
          <img
            src={girl}
            className="Girl-diva"
            alt=""
            data-aos="fade-down"
            data-aos-delay="300"
          />
          <div
            className="Welcome-container"
            // data-aos="fade-left"
            // data-aos-delay="200"
          >
            <p className="DisplayText">
              hi, it's star{" "}
              <span
                role="img"
                aria-label="peace sign"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                ✌️
              </span>
            </p>
            <p>welcome 2 an online representation of me </p>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      {renderWelcome()}
      <TopButton />
      <Experience />
      <WorkPage />
      <WritingPage />
      <About />
      <Footer />
    </>
  );
}

export default MainPage;
