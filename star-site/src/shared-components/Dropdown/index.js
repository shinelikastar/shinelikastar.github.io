// @flow
import React from "react";
import "./Dropdown.css";

class Dropdown extends React.Component {
  renderGirlDozing() {
    return (
      <div className="Girl-dozing-container">
        <img src={girl} alt="" className="Girl-dozing" />
      </div>
    );
  }

  renderNotes = () => {
    return (
      <div className="DesignNotes--thoughts">
        <details></details>
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
        </p>
      </div>
    );
  };

  render() {
    return (
      <div className="DesignNotes-page">
        <Header text="some notes on design 🌿" />
        <div className="DesignNotes-container">
          {this.renderNotes()}
          {this.renderGirlDozing()}
        </div>
      </div>
    );
  }
}

export default Dropdown;
