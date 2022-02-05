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

  renderPubDate = (published_on) => {
    const className = "Writing-line--published_on" 
    return (
        <span className={className}>{published_on}</span>
    )
  }

  renderAward = (award) => {
    if (award) {
			const {
				award_result, 
				award_name, 
				award_link, 
				selected_by
			} = award

      return (
        <div>
          <p className="Writing-line--award">
            <span className="Writing-line--award-icon" 
            role="img"
            aria-label="medallion">
             🏅  
            </span>
						{award_result} for {
							award_link ? 
								<Link
									link={award_link}
									value={award_name} /> 
								:
								award_name
						}
						{
							selected_by && 
								`, selected by ${selected_by}`
						}
          </p>
        </div>
      )
    }
  }

  renderLine = (line) => {
    const {
      title,
      interview,
      publish: { published_by, published_on },
      link,
      forthcoming,
      award,
      award_2,
    } = line;

    return (
      <div className="Writing-line" key={title}>
        <p>
          {this.renderTitle(title, link, interview)}
          {this.renderPublisher(forthcoming, published_by)}
          {this.renderPubDate(published_on)}
          {this.renderAward(award)}
          {this.renderAward(award_2)}
        </p>
      </div>
  );
  };

  renderSection = (story_list, isFlash) => {
    const subHeader = "column Writing-sub-header";
    const storyCol = "column Writing-story-col";

    return story_list.map((elem, index) => {
      var headerRow = (<div className={subHeader}></div>);
      if (index === 0) {
        headerRow = (
            <div className={subHeader}>
              {isFlash ? "Flash fiction" : "Short stories"}
            </div>
        )
      }

      return (
          <div className="row">
            {headerRow}
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
          {this.renderSection(short_stories, false)}
          {this.renderSection(flash, true)}
        </div>
      </section>
    );
  }
}

export default WritingPage;
