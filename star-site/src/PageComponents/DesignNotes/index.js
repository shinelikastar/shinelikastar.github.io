// @flow
import React from "react";
import "./DesignNotes.css";
import Header from "../../shared-components/Header";

function DesignNotes() {
  function renderNotes() {
    return (
      <div className="DesignNotes--thoughts">
        <p>
          This is a space to name all the wondrous things that resulted in the
          creation of this website. If you found any amount of delight in the
          drawings (of me in various states), these were done by my{" "}
          <a href="https://floriatsui.github.io/">talented sister Floria</a>. I
          am grateful for her patience. She has an uncanny ability to listen to
          my indecision and pick a side.
          <br></br>
          <br></br>
          The headers are set in Rowdies, the body in Jost. If you take
          typefaces seriously, I want you to know that I am a serifs girl. Their
          delicate temperament was not suited for the ample usage of emojis.
          <br></br>
          <br></br>I would also like to note the privilege of time, space, and
          knowlege this summer has given me. It's allowed me to uncover what
          brings me joy, unfettered in expectations. I hope to carry this growth
          for years to come.
        </p>
      </div>
    );
  }

  return (
    <>
      <Header text="some notes on design 🌿" />
      <div className="DesignNotes-container">{renderNotes()}</div>
    </>
  );
}

export default DesignNotes;
