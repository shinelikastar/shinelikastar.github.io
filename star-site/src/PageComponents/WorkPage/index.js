import React from "react";
import Project from "./Project";
import project_config from "./project_config";
import Header from "../../shared-components/Header";
import "./WorkPage.css";

class WorkPage extends React.Component {
  renderProjects = () => {
    return project_config.map((project, index) => {
      const { title } = project;
      return <Project key={title} index={index} {...project} />;
    });
  };

  render() {
    const headerText = "some things i've built 💥";

    return (
      <section className="Work-section">
        <Header text={headerText} />
        <div className="Project-all-container">{this.renderProjects()}</div>
      </section>
    );
  }
}

export default WorkPage;
