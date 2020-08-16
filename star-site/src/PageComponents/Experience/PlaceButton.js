// @flow
import React from "react";

const placeButtonColor = "#cfdef3";

class PlaceButton extends React.Component {
  handleContentSwitch = () => {
    const { label } = this.props;

    this.props.onPlaceButtonClick(label.split(" ")[0]);
  };

  render() {
    const { active, label } = this.props;
    const color = active ? placeButtonColor : "transparent";

    return (
      <li>
        <button
          className="Tab-button"
          onClick={this.handleContentSwitch}
          style={{ backgroundColor: color }}
        >
          <span className="Tab-heading">{label}</span>
        </button>
      </li>
    );
  }
}

export default PlaceButton;
