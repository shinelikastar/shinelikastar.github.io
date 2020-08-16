// @flow
import React from "react";

import Header from "../../shared-components/Header";
import config from "./experience_config";
import PlaceButton from "./PlaceButton";
import "./Experience.css";

class Experience extends React.Component {
  static defaultProps = {
    config: config,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeKey: "current",
    };
  }

  handleContentSwitch = (tabKey) => {
    console.log(tabKey);
    this.setState = {
      activeKey: tabKey,
    };
  };

  renderPlace = (place) => {
    const {
      location,
      role,
      time_period: { start, end },
    } = place;

    return (
      <div className="Place" key={location}>
        <h4>{location}</h4>
        {role} {" @"}
        {location}
        <p>
          {start} - {end}
        </p>
        <br></br>
      </div>
    );
  };

  renderContent = () => {
    const { activeKey } = this.state;
    const places = config[activeKey];

    return places.map(this.renderPlace);
  };

  renderTabs = () => {
    const tabs = ["past 🌒", "current 🌔", "future 🌖"];

    return (
      <ul>
        {tabs.map((tab) => {
          return <PlaceButton tab={tab} key={tab} />;
        })}
      </ul>
    );
  };

  renderExperience = () => {
    return (
      <div className="Tab-container">
        {this.renderTabs()} {this.renderContent()}
      </div>
    );
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
