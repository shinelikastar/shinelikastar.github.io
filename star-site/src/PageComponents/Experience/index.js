// @flow
import React from "react";

import Header from "../../shared-components/Header";
import Dropdown from "../../shared-components/Dropdown";
import config from "./experience_config";
import "./Experience.css";

class Experience extends React.Component {
  static defaultProps = {
    config: config,
  };

  renderExperience = () => {
    return (
      <div className="Experience-container">Hello this is WIP go away</div>
    );
  };

  render() {
    return (
      <>
        <Header text="some places i've worked 🎒" />
        {this.renderExperience()}
      </>
    );
  }
}

export default Experience;
