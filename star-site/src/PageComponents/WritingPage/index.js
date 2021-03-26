import React from "react";
import Header from "../../shared-components/Header";
import config from "./writing_config";
import "./WritingPage.css";

class WritingPage extends React.Component {
  static defaultProps = {
    archive: config,
  };

  renderTitle = (title, link, interview) => {
    const className = "Writing-line--title Link-highlight";

    if (link) {
      return (
        <span>
          <a
            className={className}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            "{title}"
          </a>
          {interview &&
          <span>
              {" &  "}
              <a 
              className={className} 
              href={interview.interview_link}
              target="_blank"
              rel="noopener noreferrer"
              >
                author interview
              </a>
              </span>
          }
      </span>
      );
    } else {
      return (
        <span className="Writing-line--title forthcoming" href={link}>
          "{title}"
        </span>
      );
    }
  };

  renderPublisher = (forthcoming, published_by) => {
    if (forthcoming) {
      const { forthcoming_link } = forthcoming;
      return (
        <span className="Writing-line--published_by">
          -{" "}
          <a
            className="Writing-line--forthcoming Link-highlight"
            href={forthcoming_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {published_by},
          </a>
        </span>
      );
    } else {
      return (
        <span className="Writing-line--published_by">- {published_by}</span>
      );
    }
  };

  renderLine = (line) => {
    const {
      title,
      interview,
      publish: { published_by, published_on },
      link,
      forthcoming,
    } = line;

    return (
      <div className="Writing-line" key={title}>
        <p>
          {this.renderTitle(title, link, interview)}
          {this.renderPublisher(forthcoming, published_by)}
          <span className="Writing-line--published_on">{published_on}</span>
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
    const headerText = "publications";

    return (
      <section className="Writing-page-container">
        <Header text={headerText} />
        <div className="Writing-archive">{this.renderArchive()}</div>
      </section>
    );
  }
}

export default WritingPage;
