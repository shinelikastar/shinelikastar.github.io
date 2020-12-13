// @flow
import React from "react";
import "./Link.css";

class Link extends React.Component {
  render() {
    const { className, link, value } = this.props;
    return (
      <a
        className={className}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {value}
      </a>
    );
  }
}

export default Link;
