// @flow
import React from "react";
import "./Dropdown.css";

class Dropdown extends React.Component {
  static defaultProps = {
    defaultActive: false,
  };

  constructor(props) {
    super(props);

    const { defaultActive } = this.props;
    this.state = {
      active: defaultActive,
    };
  }

  handleToggle = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  renderSummary() {
    const { summary } = this.props;
    return (
      <div className="Dropdown-summary" onClick={this.handleToggle}>
        {summary}
      </div>
    );
  }

  renderContent = () => {
    const { content } = this.props;
    const { active } = this.state;

    return (
      <div
        className="Dropdown-content"
        style={{ display: active ? "inline-block" : "none" }}
      >
        {content}
      </div>
    );
  };

  render() {
    return (
      <div className="Dropdown">
        {this.renderSummary()}
        {this.renderContent()}
      </div>
    );
  }
}

export default Dropdown;
