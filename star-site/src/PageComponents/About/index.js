// @flow
import React from "react";
import Header from "../../shared-components/Header";
import Dropdown from "../../shared-components/Dropdown";
import Link from "../../shared-components/Link";
import dishes from './cooking_config'
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
  static defaultProps = {
    dishConfig: dishes,
  }

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

  popDish() {
    const {dishConfig} = this.props;
    const {dishes} = dishConfig[0];

    //TODO: update later to be random from stack
    const topDish = dishes[0];
    const {name, link} = topDish;

    return (
      <Link
        link={link.href}
        value={name}
        className="Link-highlight"
      />
    )
  }

  renderAbout() {
    return (
      <div className="About-content">
        <p className="About-text">
          Hi! I'm a writer and engineer currently living in Brooklyn, NY. 
          <br></br>
          <br></br>I love cooking elaborate dishes (most recently: {this.popDish()}), going 
          to museums, making tea and forgetting to drink it, and{" "}
          <Link
            link="https://www.goodreads.com/user/show/51203370-star-su"
            value="reading"
            className="Link-highlight"
          />{" "}
          everything I come across.<br></br>
          <br></br>
          Thanks for stopping by! Find me on Twitter 
          <Link 
            link="https://twitter.com/stars_su"
            value="(@stars_su)"
            className="Link-highlight"
          />
          .
        </p>
      </div>
    );
  }

  render() {
    return (
      <section className="DesignNotes-section">
        <Header text="about 🍄" />

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
