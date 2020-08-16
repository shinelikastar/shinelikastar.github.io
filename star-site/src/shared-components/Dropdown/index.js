// @flow
import React from "react";
import { motion } from "framer-motion";
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
    const { active } = this.state;

    return (
      <div className="Dropdown-summary" onClick={this.handleToggle}>
        {summary}
        <motion.span
          className="Dropdown-point-icon"
          whileHover={{ y: 5 }}
          whileTap={{ scale: 0.8 }}
        >
          {active ? "👆" : "👇"}
        </motion.span>
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
