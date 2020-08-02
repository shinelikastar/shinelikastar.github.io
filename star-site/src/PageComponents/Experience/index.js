// @flow
import React from "react";
import Header from "../../shared-components/Header";
import "./Experience.css";
import config from "./experience_config";

class Experience extends React.Component {
  static defaultProps = {
    config: config,
  };

  renderExperience = () => {
    return <div className="Experience-container">Hello</div>;
  };

  render() {
    return (
      <>
        <Header text="some places i've been 🌈" />
        {this.renderExperience()}
      </>
    );
  }
}

export default Experience;
