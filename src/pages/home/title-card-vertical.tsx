import PortfolioPic from "../../library/assets/portfolio-pic.png";
import ReactIcon from "../../library/assets/icons/languages/react.png";
import AzureIcon from "../../library/assets/icons/languages/azure.png";
import CssIcon from "../../library/assets/icons/languages/css-3.png";
import HtmlIcon from "../../library/assets/icons/languages/html-5.png";
import JsIcon from "../../library/assets/icons/languages/js.png";
import SassIcon from "../../library/assets/icons/languages/sass.png";
import LinkedInIcon from "../../library/assets/icons/contacts/linkedin.png";
import GithubIcon from "../../library/assets/icons/contacts/github.png";
import { useState, useEffect, useMemo } from "react";
const TitleCardVertical = (): JSX.Element => {
  const langaugesText = "Languages";
  const languageArray = langaugesText.split("");

  const codeStackArray = ["C", "o", "d", "e", "-", "S", "t", "a", "c", "k"];

  const animatedTitles = useMemo(() => {
    return ["Web-Developer", "Azure-Expert", "Electrical-Engineer"];
  }, []);

  const animatedTitlesWithoutDash = useMemo(() => {
    return ["Web Developer", "Data Scientist", "Electrical Engineer"];
  }, []);
  const [activeAnimatedTitleIndex, setActiveAnimatedTitleIndex] = useState(0);
  const [activeAnimatedTitleLetterIndex, setActiveAnimatedTitleLetterIndex] =
    useState(0);

  const [splitAnimatedTitles, setSplitAnimatedTitles] = useState<string[][]>(
    []
  );

  const [animationCompletedTitles, setAnimationCompletedTitles] = useState<
    string[]
  >([]);
  const [triggerAnimationNextStep, setTriggerAnimationNextStep] =
    useState(false);

  useEffect(() => {
    const tempTitlesArray = [];
    for (
      let indexOfAnimatedTitles = 0;
      indexOfAnimatedTitles < animatedTitles.length;
      indexOfAnimatedTitles++
    ) {
      tempTitlesArray[indexOfAnimatedTitles] =
        animatedTitles[indexOfAnimatedTitles].split("");
    }
    setSplitAnimatedTitles(tempTitlesArray);
  }, [animatedTitles]);

  useEffect(() => {
    if (
      splitAnimatedTitles.length !== 0 &&
      animationCompletedTitles.length !== animatedTitles.length &&
      triggerAnimationNextStep
    ) {
      if (
        activeAnimatedTitleLetterIndex ===
        splitAnimatedTitles[activeAnimatedTitleIndex].length - 1
      ) {
        const tempCompletedTitles = animationCompletedTitles.splice(0);
        tempCompletedTitles.push(
          animatedTitlesWithoutDash[activeAnimatedTitleIndex]
        );

        setActiveAnimatedTitleIndex(activeAnimatedTitleIndex + 1);

        setAnimationCompletedTitles(tempCompletedTitles);

        setActiveAnimatedTitleLetterIndex(0);
      } else {
        setActiveAnimatedTitleLetterIndex(activeAnimatedTitleLetterIndex + 1);
      }
      setTriggerAnimationNextStep(false);
    }
  }, [
    activeAnimatedTitleIndex,
    activeAnimatedTitleLetterIndex,
    animatedTitles,

    animationCompletedTitles,
    animatedTitlesWithoutDash,
    splitAnimatedTitles,
    triggerAnimationNextStep,
  ]);

  useEffect(() => {
    if (animationCompletedTitles.length !== animatedTitles.length) {
      const animationTriggerTimeout = setTimeout(() => {
        setTriggerAnimationNextStep(!triggerAnimationNextStep);
      }, 150);
      return () => {
        clearTimeout(animationTriggerTimeout);
      };
    }
  }, [triggerAnimationNextStep, animationCompletedTitles, animatedTitles]);

  return (
    <section className="full-window-centered bg-primary-1000 title-card-section-container">
      <div className="languages-vertical-container">
        <div className="title-card-vertical-title-container">
          {languageArray.map((entry: string, index: number) => {
            return (
              <p
                className="ff-base fs-20 primary-clr-primary-000 title-card-vertical-title"
                key={`${entry}-${index}`}
              >
                {entry}
              </p>
            );
          })}
        </div>
        <div className="code-platform-icon-list-container-vertical">
          <img src={ReactIcon} alt="react icon" className="code-icon" />
          <img src={JsIcon} alt="js icon" className="code-icon" />

          <img src={HtmlIcon} alt="html icon" className="code-icon" />
          <img src={SassIcon} alt="sass icon" className="code-icon" />
          <img src={CssIcon} alt="css icon" className="code-icon" />
          <img src={AzureIcon} alt="azure icon" className="code-icon" />
        </div>
      </div>

      <div className="tech-stack-container-vertical">
        <div className="title-card-vertical-title-container ">
          {codeStackArray.map((entry: string, index: number) => {
            return (
              <div key={`${entry}-${index}`}>
                {entry !== "-" && (
                  <p className="ff-base fs-20 primary-clr-primary-000 title-card-vertical-title fs-16">
                    {entry}
                  </p>
                )}
                {entry === "-" && (
                  <p className="ff-base fs-20 primary-clr-primary-000 title-card-vertical-title fs-16">
                    &nbsp;
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div className="code-platform-icon-list-container-vertical">
          <button className="code-icon-button">
            <a
              className="code-icon-link"
              href="https://github.com/JennaMitchell"
            >
              Github Link
            </a>
            <img src={GithubIcon} alt="github icon" className="code-icon" />
          </button>
          <button className="code-icon-button">
            <a
              className="code-icon-link"
              href="https://www.linkedin.com/in/jennaallisonmitchell"
            >
              Linkedin Link
            </a>
            <img src={LinkedInIcon} alt="linkedin icon" className="code-icon" />
          </button>
        </div>
      </div>

      <div className="title-card-data-container">
        <div className="title-card-text-container">
          <div className="title-card-name-container">
            <p className="section-title-text lh-64 fs-64 primary-clr-primary-000">
              Jenna
            </p>
            <p className="section-title-text-accent lh-64 fs-64 accent-clr-primary-500">
              Mitchell
            </p>
          </div>

          <div className="completed-animated-text-container fs-48">
            {animationCompletedTitles.length !== 0 &&
              animationCompletedTitles.map((entry, index) => {
                return (
                  <p
                    className={`title-card-animated-text  fs-48 lh-48 primary-clr-primary-000`}
                    key={`completed-job-title--${index}-${activeAnimatedTitleIndex}-${activeAnimatedTitleLetterIndex}-${splitAnimatedTitles[activeAnimatedTitleIndex]}`}
                  >
                    {entry}
                  </p>
                );
              })}
          </div>
          {animationCompletedTitles.length !== animatedTitles.length && (
            <div className="animated-text-container fs-64">
              {splitAnimatedTitles.length !== 0 &&
                splitAnimatedTitles[activeAnimatedTitleIndex].map(
                  (entry, index) => {
                    return (
                      <div
                        key={`animated-titles-${entry}-${index}-${activeAnimatedTitleIndex}-${activeAnimatedTitleLetterIndex}}`}
                      >
                        {entry !== "-" ? (
                          <p
                            className={`title-card-animated-text  fs-48 lh-48 primary-clr-primary-000 ${
                              activeAnimatedTitleLetterIndex >= index
                                ? "display-grid"
                                : "display-none"
                            }`}
                          >
                            {entry}
                          </p>
                        ) : (
                          <p
                            className={`title-card-animated-text fs-48 lh-48 primary-clr-primary-000 ${
                              activeAnimatedTitleLetterIndex >= index
                                ? "display-grid"
                                : "display-none"
                            }`}
                          >
                            &nbsp;
                          </p>
                        )}
                      </div>
                    );
                  }
                )}
              {animationCompletedTitles.length !== animatedTitles.length && (
                <div className="flashing-typing-bar primary-clr-primary-000" />
              )}
            </div>
          )}
        </div>

        <img src={PortfolioPic} alt="portfolio-pic" className="portfolio-img" />
      </div>
    </section>
  );
};
export default TitleCardVertical;
