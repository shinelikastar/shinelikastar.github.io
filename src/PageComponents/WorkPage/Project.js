import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FaGithub, FaFolderOpen } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

import weenix from "./images/weenix/weenix.gif";
import eggs from "./images/eggs/eggs_static.png";
import raisin from "./images/raisin_bread/raisin_bread_static.png";
import address from "./images/address_autocomplete/address_autocomplete.gif";
import ray from "./images/ray/ray_static.png";
import "./Project.css";

const iconBlue = "rgb(16, 162, 245)";
const iconProps = {
  size: 20,
  fill: iconBlue,
  className: "Project-icon",
};
const linkProps = {
  size: 20,
  stroke: iconBlue,
  className: "Project-icon",
};

const PROJECTS = {
  weenix,
  eggs,
  raisin,
  address,
  ray,
};

function isEven(n) {
  return n % 2 === 0;
}

class Project extends React.Component {
  tokenizeTitle = (title) => {
    return title
      .split("-")[0]
      .split(" ")[0]
      .toLowerCase();
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
    const alignment = index === 0 ? "left" : isEven(index) ? "left" : "right";

    return (
      <motion.div
        style={{ float: alignment, cursor: "pointer" }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.8 }}
      >
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="Project-icon"
          >
            <FaGithub {...iconProps} />
          </a>
        )}

        {files && (
          <a href={files} target="_blank" rel="noopener noreferrer">
            <FaFolderOpen {...iconProps} />
          </a>
        )}

        {redirect && (
          <a href={redirect} target="_blank" rel="noopener noreferrer">
            <FiLink {...linkProps} />
          </a>
        )}
      </motion.div>
    );
  };

  renderLanguages = (languages, index) => {
    const className = classNames("Language-list", {
      "Language-list--left": isEven(index),
      "Language-list--right": !isEven(index),
    });
    return (
      <ul className={className} data-aos="fade-right" data-aos-delay="150">
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
      <div className={boardClass} data-aos="fade-up" data-aos-delay="200">
        <p className={headerClass}>{title}</p>
        <p className={textClass}>{description}</p>
        {this.renderLanguages(languages, index)}
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
