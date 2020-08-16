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

  renderTabs = () => {
    const tabs = ["past", "current", "future"];

    return (
      <ul>
        {tabs.map((tab) => {
          return (
            <li>
              <button>
                <span>{tab}</span>
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
      <>
        <Header text="some places i've worked 🎒" />
        {this.renderExperience()}
      </>
    );
  }
}

export default Experience;
