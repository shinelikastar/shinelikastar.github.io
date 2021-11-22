// @flow
import React from "react";
import { motion } from "framer-motion";
import "./Dropdown.css";

const contentVariants = {
  hidden: {
    opacity: 0,
  },
  showing: {
    opacity: 1,
  },
  transition: {
    duration: 0.3,
  },
};

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
    const { defaultActive } = this.props;
    if (defaultActive) return;

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
          style={{ cursor: "pointer" }}
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
      <motion.div
        className="Dropdown-content"
        initial="hidden"
        animate={active ? "showing" : "hidden"}
        variants={contentVariants}
        style={{ display: active ? "inline-block" : "none" }}
      >
        {content}
      </motion.div>
    );
  };

  render() {
    return (
      <div className="Dropdown" data-aos="fade-up" data-aos-delay="300">
        {this.renderSummary()}
        {this.renderContent()}
      </div>
    );
  }
}

export default Dropdown;
