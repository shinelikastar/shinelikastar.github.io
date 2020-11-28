import React from "react";
import Header from "../../shared-components/Header";
import config from "./writing_config";
import "./WritingPage.css";

class WritingPage extends React.Component {
  static defaultProps = {
    archive: config,
  };

  renderTitle = (title, link) => {
    if (link) {
      return (
        <a
          className="Writing-line--title Link-highlight"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          "{title}"
        </a>
      );
    } else {
      return (
        <span className="Writing-line--title" href={link}>
          "{title}"
        </span>
      );
    }
  };

  renderLine = (line) => {
    const {
      title,
      publish: { published_by, published_on },
      link,
    } = line;

    return (
      <div className="Writing-line" key={title}>
        <p>
          {this.renderTitle(title, link)}
          <span className="Writing-line--publish">
            {published_by}, {published_on}
          </span>
        </p>
      </div>
    );
  };

  renderArchive = () => {
    const { archive } = this.props;
    return archive.map((elem, index) => {
      return this.renderLine(elem, index);
    });
  };

  render() {
    const headerText = "selected publications ✨";

    return (
      <section className="Writing-page-container">
        <Header text={headerText} />
        <div className="Writing-archive">{this.renderArchive()}</div>
      </section>
    );
  }
}

export default WritingPage;
