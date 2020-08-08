// @flow
import React from "react";
import girl from "../../assets/diva.png";
import WorkPage from "../WorkPage";
import Footer from "./Footer";
import Experience from "../Experience";
import WritingPage from "../WritingPage";
import DesignNotes from "../DesignNotes";
import "./MainPage.css";
import TopButton from "../../shared-components/TopButton";

function MainPage() {
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

  return (
    <>
      {renderWelcome()}
      <TopButton />
      <Experience />
      <WorkPage />
      <WritingPage />
      <DesignNotes />
      <Footer />
    </>
  );
}

export default MainPage;
