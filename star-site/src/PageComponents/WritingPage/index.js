import React from "react";
import Header from "../../shared-components/Header";
import config from "./writing_config";
import Link from "../../shared-components/Link";
import "./WritingPage.css";

class WritingPage extends React.Component {
  static defaultProps = {
    config: config,
  };

  renderTitle = (title, link, interview) => {
    const className = "Writing-line--title Link-highlight";

    if (link) {
      return (
        <span>
          <Link
            className={className}
            link={link}
            value={title}
          />
          {interview &&
          <span>
              {" &  "}
              <Link
              className={className} 
              link={interview.interview_link}
              value="author interview"
              />
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
          <Link
            className="Writing-line--forthcoming Link-highlight"
            link={forthcoming_link}
            value={published_by}
          />
          ,
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

  renderStoryList = (story_list, isFlash) => {
    const subHeader = "column Writing-sub-header";
    const storyCol = "column Writing-story-col";

    return story_list.map((elem, index) => {
      var firstRow = (<div className={subHeader}></div>);
      if (index === 0) {
        firstRow = (
            <div className={subHeader}>
              {isFlash ? "Flash fiction" : "Short stories"}
            </div>
        )
      }

      return (
          <div className="row">
            {firstRow}
            <div className={storyCol}>
              {this.renderLine(elem, index)}
            </div>
          </div>
      )
    });
  };

  render() {
    const {config} = this.props;
    const {short_stories} = config[0];
    const {flash} = config[1];

    return (
      <section className="Writing-page-container">
        <Header text="publications" />
        <div className="Writing-archive">
          {this.renderStoryList(short_stories, false)}
          {this.renderStoryList(flash, true)}
        </div>
      </section>
    );
  }
}

export default WritingPage;
