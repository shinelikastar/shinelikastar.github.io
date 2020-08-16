// @flow
import React from "react";

class PlaceButton extends React.Component {
  handleContentSwitch = () => {
    console.log("hello");
  };

  render() {
    const { tab } = this.props;

    return (
      <li>
        <button className="Tab-button" onClick={this.handleContentSwitch}>
          <span className="Tab-heading">{tab}</span>
        </button>
      </li>
    );
  }
}

export default PlaceButton;
