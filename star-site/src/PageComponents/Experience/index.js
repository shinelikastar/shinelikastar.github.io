// @flow
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Header from "../../shared-components/Header";
import config from "./experience_config";
import PlaceButton from "./PlaceButton";
import "./Experience.css";

const iconProps = {
  size: 25,
};

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

  renderWorkIcons = () => {
    return (
      <ul className="Icon-container">
        <li>
          <a href="https://github.com/shinelikastar">
            <FaGithub {...iconProps} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/star-su-992866170/">
            <FaLinkedin {...iconProps} />
          </a>
        </li>
        <li>
          <a href="mailto:star_su@brown.edu">
            <MdEmail {...iconProps} />
          </a>
        </li>
      </ul>
    );
  };

  render() {
    return (
      <section className="Experience-page">
        <Header text="some places i've worked  🐣" />
        <div className="Tab-container" data-aos="fade-up" data-aos-delay="200">
          {this.renderTabs()}
          {this.renderContent()}
        </div>
        {this.renderWorkIcons()}
      </section>
    );
  }
}

export default Experience;
