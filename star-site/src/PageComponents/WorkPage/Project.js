import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FaGithub, FaFolderOpen } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

import weenix from "./images/weenix/weenix.gif";
import eggs from "./images/eggs/eggs_static.png";
import raisin from "./images/raisin_bread/raisin_bread_static.png";
import maps from "./images/maps/maps_static.png";

import "./Project.css";

const iconColor = "rgb(16, 162, 245)";
const iconProps = {
  size: 20,
  fill: iconColor,
  className: "Project-icon",
};
const linkProps = {
  size: 20,
  stroke: iconColor,
  className: "Project-icon",
};

const PROJECTS = {
  weenix,
  eggs,
  raisin,
  maps,
};

function isEven(n) {
  return n % 2 === 0;
}

class Project extends React.Component {
  tokenizeTitle = (title) => {
    return title.split("-")[0].toLowerCase();
  };

  renderImage = () => {
    const { title, index } = this.props;
    const img = PROJECTS[this.tokenizeTitle(title)];

    const imageClass = classNames("Project-img", {
      "Project-img--left": isEven(index),
    });

    return (
      <div className="Project-img-container">
        <img className={imageClass} src={img} alt={title}></img>
      </div>
    );
  };

  renderLinks = (links) => {
    const { github, files, redirect } = links;

    const { index } = this.props;
    const align = index === 0 ? "left" : isEven(index) ? "left" : "right";

    return (
      <motion.div
        style={{ width: 45, float: align, cursor: "pointer" }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.8 }}
      >
        {github && (
          <a href={github} className="Project-icon">
            <FaGithub {...iconProps} />
          </a>
        )}

        {files && (
          <a href={files}>
            <FaFolderOpen {...iconProps} />
          </a>
        )}

        {redirect && (
          <a href={redirect}>
            <FiLink {...linkProps} />
          </a>
        )}
      </motion.div>
    );
  };

  renderLanguages = (languages) => {
    return (
      <ul className="Language-list">
        {languages.map((elem) => {
          return (
            <li className="Language-list-elem" key={elem}>
              {elem}
            </li>
          );
        })}
      </ul>
    );
  };

  renderBoard = () => {
    const { title, description, languages, links, index } = this.props;

    const boardClass = classNames(
      "Project-board",
      {
        "Project-board--left": isEven(index),
      },
      {
        "Project-board--right": !isEven(index),
      }
    );
    const headerClass = classNames("Project-header", {
      "Project-header-left": isEven(index),
    });
    const textClass = classNames("Project-text");

    return (
      <div className={boardClass}>
        <p className={headerClass}>{title}</p>
        <p className={textClass}>{description}</p>
        {this.renderLanguages(languages)}
        {this.renderLinks(links)}
      </div>
    );
  };

  render() {
    return (
      <div className="Project-container">
        {this.renderImage()}
        {this.renderBoard()}
      </div>
    );
  }
}

export default Project;
