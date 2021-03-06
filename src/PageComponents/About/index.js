// @flow
import React from "react";
import Header from "../../shared-components/Header";
import Dropdown from "../../shared-components/Dropdown";
import Link from "../../shared-components/Link";
import girl from "../../assets/dozing.png";
import "./About.css";

const summary = "design notes";
const content = (
  <p>
    If you found any amount of delight in the drawings, these were done by my{" "}
    <Link
      link="https://floriatsui.github.io/"
      value="talented sister Floria"
      className="Link-highlight"
    />
    .<br></br>
    <br></br>
    The headers are set in Rowdies, the body in Jost. Built using React.
    <br></br>
  </p>
);

class About extends React.Component {
  renderGirlDozing() {
    return (
      <div
        className="Girl-dozing-container"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <img src={girl} alt="" className="Girl-dozing" />
      </div>
    );
  }

  renderAbout() {
    return (
      <div className="About-content">
        <p className="About-text">
          Hi! If we met in real life, I would probably try to give you a cup of
          tea and something I've baked.
          <br></br>
          <br></br>I really like building stuff (soft-bread or soft-ware),
          crossword puzzles, fussy ways of making coffee, learning and teaching,
          figure skating, and{" "}
          <Link
            link="https://airtable.com/shrqtsEcKMYjEjXaO"
            value="reading"
            className="Link-highlight"
          />{" "}
          anything I come across.<br></br>
          <br></br>
          Thanks for stopping by!
        </p>
      </div>
    );
  }

  render() {
    return (
      <section className="DesignNotes-section">
        <Header text="about 🌱" />

        <div className="About-container">
          <div
            className="About-dropdown"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {this.renderAbout()}
            <Dropdown summary={summary} content={content} />
          </div>

          {this.renderGirlDozing()}
        </div>
      </section>
    );
  }
}

export default About;
