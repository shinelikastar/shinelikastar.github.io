// @flow
import React from "react";

import Header from "../../shared-components/Header";
import config from "./experience_config";
import "./Experience.css";

class Experience extends React.Component {
  static defaultProps = {
    config: config,
  };

  renderContent = () => {};

  renderTabs = () => {
    const tabs = ["past 🌒", "current 🌔", "future 🌖"];

    return (
      <ul>
        {tabs.map((tab) => {
          return (
            <li key={tab}>
              <button className="Tab-button">
                <span className="Tab-heading">{tab}</span>
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  renderExperience = () => {
    return <div className="Tab-container">{this.renderTabs()}</div>;
  };

  render() {
    return (
      <div className="Experience-page">
        <Header text="some places i've worked 🎒" />
        {this.renderExperience()}
      </div>
    );
  }
}

export default Experience;
