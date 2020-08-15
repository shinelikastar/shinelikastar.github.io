// @flow
import React from "react";

import Header from "../../shared-components/Header";
import Dropdown from "../../shared-components/Dropdown";
import girl from "../../assets/dozing.png";
import "./About.css";

const summary = "design notes 🌸";
const content = (
  <p>
    This is a space to name all the wondrous things that resulted in the
    creation of this website. If you found any amount of delight in the drawings
    (of me in various states), these were done by my{" "}
    <a href="https://floriatsui.github.io/">talented sister Floria</a>.<br></br>
    <br></br>
    The headers are set in Rowdies, the body in Jost. If you take typefaces
    seriously, I want you to know that I am a serifs girl. Their delicate
    temperament was not suited for the ample usage of emojis.
    <br></br>
  </p>
);

class About extends React.Component {
  renderGirlDozing() {
    return (
      <div
        className="Girl-dozing-container"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <img src={girl} alt="" className="Girl-dozing" />
      </div>
    );
  }

  render() {
    return (
      <div className="DesignNotes-page">
        <Header text="about 🌿" />
        <div className="About-container">
          <div
            className="About-dropdown"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Dropdown summary={summary} content={content} />
          </div>

          {this.renderGirlDozing()}
        </div>
      </div>
    );
  }
}

export default About;
