// @flow
import React from "react";

import girl from "../../assets/diva.png";
import "./MainPage.css";

import Footer from "./Footer";
import Experience from "../Experience";
import WritingPage from "../WritingPage";
import About from "../About";
import TopButton from "../../shared-components/TopButton/";

function MainPage() {
  function renderWelcome() {
    const caption = "Picture of a girl with sunglasses in a blue overall dress";

    return (
      <section className="Welcome-section">
        <div className="Welcome-container">
          <img
            src={girl}
            className="Girl-diva"
            alt={caption}
            data-aos="fade-down"
            data-aos-delay="300"
          />

          <div className="Welcome-text-container">
            <p className="DisplayText">
              hi, it's star{" "}
              <span
                role="img"
                aria-label="peace sign emoji"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                ✌️
              </span>
            </p>
            <p className="Welcome-subtext">
              welcome 2 an online representation of me{" "}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {renderWelcome()}
      <TopButton />
      <Experience />
      <WritingPage />
      <About />
      <Footer />
    </>
  );
}

export default MainPage;
