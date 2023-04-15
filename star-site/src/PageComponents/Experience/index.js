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

  getEndValue = (end) => {
    if (end) {
      return `- ${end}`;
    }

    if (this.state.activeKey === 'past') {
      return;
    }

    return "- present"
  }

  renderPlace = (place) => {
    const {
      location: { value, ref },
      role,
      time_period: { start, end },
    } = place;

    return (
      <div className="Place" key={value}>
        <div className="Place-location">
          <h4>
            <span className="Place-role">{role}</span>
            <span className="Place-location-text">
              {" "}
              <a
                className="Place-location-link"
                href={ref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" @"}
                {value}
              </a>
            </span>
          </h4>
        </div>

        <p className="Place-time">
          {start} {this.getEndValue(end)}
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
      <section className="Experience-section">
        <Header text="some places i've worked  🐣" />
        <div className="Tab-container" data-aos="fade-up" data-aos-delay="200">
          {this.renderTabs()}
          {this.renderContent()}
        </div>
      </section>
    );
  }
}

export default Experience;
