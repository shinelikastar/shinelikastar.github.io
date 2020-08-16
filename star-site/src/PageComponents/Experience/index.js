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
    this.setState({
      activeKey: tabKey,
    });
  };

  renderPlace = (place) => {
    const {
      location,
      role,
      time_period: { start, end },
    } = place;

    return (
      <div className="Place" key={location}>
        <div className="Place-location">
          <h4>
            <span className="Place-role">{role} </span>
            <span className="Place-location-text">
              {" "}
              {" @"}
              {location}
            </span>
          </h4>
        </div>

        <p className="Place-time">
          {start} {end ? `- ${end}` : "- present"}
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
    const tabLabels = ["past 🌒", "current 🌔", "future 🌖"];
    const tabs = ["past", "current", "future"];
    const { activeKey } = this.state;

    return (
      <ul>
        {tabs.map((tab, index) => {
          return (
            <PlaceButton
              onPlaceButtonClick={this.handleContentSwitch}
              label={tabLabels[index]}
              key={tab}
              active={tab === activeKey}
            />
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <div className="Experience-page">
        <Header text="some places i've worked  🐣" />
        <div className="Tab-container">
          {this.renderTabs()}
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Experience;
