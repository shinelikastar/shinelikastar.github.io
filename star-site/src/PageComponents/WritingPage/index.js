import React from "react";

import Header from "../../shared-components/Header";
import "./WritingPage.css";
import config from "./writing_config";

class WritingPage extends React.Component {
  static defaultProps = {
    archive: config,
  };

  renderLine = (line, index) => {
    const {
      title,
      publish: { published_by, published_on },
      link,
    } = line;

    return (
      <div className={`line-${index}`} key={title}>
        <a className="Writing-line--title" href={link}>
          {title}
        </a>
        <p className="Writing-line--publish">
          {published_by}
          <br></br>
          {published_on}
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

  renderThoughts = () => {
    return (
      <div className="Writing-thought-container">
        <p className="Writing-thought-header">Thoughts</p>
        <p>A collection of my writing pieces that live on the interwebs.</p>
      </div>
    );
  };

  render() {
    const headerText = "some things i've written ✨";

    return (
      <div className="Writing-page-container">
        <Header text={headerText} />
        <div className="Writing-archive">{this.renderArchive()}</div>
      </div>
    );
  }
}

export default WritingPage;
