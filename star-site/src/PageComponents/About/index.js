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
    If you found any amount of delight in the drawings, 
    these were done by my talented sister Floria, 
    who does not exist on the Internet.
    <br></br>
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
        Star Su is a writer and engineer. She grew up in Michigan and now lives in
        New York.
        <br/>
        <br/>
        Her fiction has appeared in Black Warrior Review, The Offing, Porter House
        Review, Waxwing, and elsewhere. Their short stories have been chosen by
        Yiyun Li as a finalist in Porter House Review’s 2021 Editor Prize and
        K-Ming Chang as first runner-up in Black Warrior Review’s 2021 fiction
        contest. Their work has been anthologized in Best Microfiction 2022 and
        nominated for the Pushcart, Best Small Fictions, and Best Microfiction.
        They are an assistant flash fiction editor for Split Lip Magazine.
        <br/>
        <br/>
        She is currently working on a short story collection.
        <br/>
        <br/>
        She is always on the hunt for eclectic animated films. You can contact
        them at star dot c dot su at gmail.
      </p>
      </div>
    );
  }

  render() {
    return (
      <section className="DesignNotes-section">
        <Header text="about 🌿" />

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
