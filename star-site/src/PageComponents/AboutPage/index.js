// @flow
import React from "react";
import Navbar from "../../shared-components/Navbar";
import config from "../../shared-components/Navbar/navbar_config";
import girl from "../../assets/diva.png";
import WorkPage from "../WorkPage";
import Footer from "./Footer";
import WritingPage from "../WritingPage";
import DesignNotes from "../DesignNotes";
import "./AboutPage.css";
import TopButton from "../../shared-components/Navbar/TopButton";

function AboutPage() {
  function renderWelcome() {
    return (
      <header className="App-header">
        <div className="Girl-container">
          <img src={girl} className="Girl-diva" alt="" />
          <div className="Welcome-container">
            <p className="DisplayText">
              hi, it's star{" "}
              <span role="img" aria-label="waving">
                ✌️
              </span>
            </p>
            <p>welcome 2 an online representation of me </p>
          </div>
        </div>
      </header>
    );
  }

  const innerApp = (
    <>
      {renderWelcome()}
      <TopButton />
      <WorkPage />
      <WritingPage />
      <DesignNotes />
      <Footer />
    </>
  );

  return <>{innerApp}</>;
}

export default AboutPage;
