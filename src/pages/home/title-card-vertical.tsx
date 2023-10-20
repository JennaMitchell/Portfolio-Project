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
    return [
      "Web-Developer",
      "Data-Scientist",
      "Azure-Expert",
      "Electrical-Engineer",
    ];
  }, []);

  const animatedTitlesWithoutDash = useMemo(() => {
    return [
      "Web Developer",
      "Data Scientist",
      "Azure Expert",
      "Electrical Engineer",
    ];
  }, []);
  const [activeAnimatedTitleIndex, setActiveAnimatedTitleIndex] = useState(0);
  const [activeAnimatedTitlePosition, setActiveAnimatedTitlePosition] =
    useState(0);

  const [splitAnimatedTitles, setSplitAnimatedTitles] = useState<string[][]>(
    []
  );
  const [holdAnimationSecondsCount, setHoldAnimationSecondsCount] = useState(1);
  const [holdAnimationActive, setHoldAnimationActive] = useState(false);

  const [animationCompletedTitles, setAnimationCompletedTitles] = useState<
    string[]
  >([]);

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
    const activeAnimatedTitles = animatedTitles[activeAnimatedTitleIndex];

    if (splitAnimatedTitles.length !== 0) {
      const animationTimeout = setTimeout(() => {
        if (animationCompletedTitles.length !== animatedTitles.length) {
          if (
            holdAnimationSecondsCount >= 0 &&
            holdAnimationSecondsCount < 1 &&
            holdAnimationActive
          ) {
            setHoldAnimationSecondsCount(holdAnimationSecondsCount + 1);
          } else if (holdAnimationSecondsCount === 1 && holdAnimationActive) {
            setHoldAnimationActive(false);
            setActiveAnimatedTitlePosition(0);

            if (activeAnimatedTitleIndex === animatedTitles.length - 1) {
              setActiveAnimatedTitleIndex(0);
            } else {
              setActiveAnimatedTitleIndex(activeAnimatedTitleIndex + 1);
            }
            const tempCompletedAnimationList =
              animationCompletedTitles.splice(0);
            tempCompletedAnimationList.push(
              animatedTitlesWithoutDash[activeAnimatedTitleIndex]
            );
            setAnimationCompletedTitles(tempCompletedAnimationList);
          } else {
            if (
              activeAnimatedTitles.length - 1 ===
              activeAnimatedTitlePosition
            ) {
              setHoldAnimationActive(true);
              setHoldAnimationSecondsCount(0);
            } else {
              setActiveAnimatedTitlePosition(activeAnimatedTitlePosition + 1);
            }
          }
        }
      }, 150);

      return () => {
        clearTimeout(animationTimeout);
      };
    }
  }, [
    activeAnimatedTitleIndex,
    activeAnimatedTitlePosition,
    animatedTitles,
    holdAnimationSecondsCount,
    holdAnimationActive,
    animationCompletedTitles,
    animatedTitlesWithoutDash,
    splitAnimatedTitles,
  ]);

  return (
    <section className="full-window-centered bg-transparent title-card-section-container">
      <div className="languages-vertical-container">
        <div className="title-card-vertical-title-container">
          {languageArray.map((entry: string, index: number) => {
            return (
              <p
                className="ff-base fs-20 clr-primary-000 title-card-vertical-title"
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
              <>
                {entry !== "-" && (
                  <p
                    className="ff-base fs-20 clr-primary-000 title-card-vertical-title"
                    key={`${entry}-${index}`}
                  >
                    {entry}
                  </p>
                )}
                {entry === "-" && (
                  <p
                    className="ff-base fs-20 clr-primary-000 title-card-vertical-title"
                    key={`${entry}-${index}`}
                  >
                    &nbsp;
                  </p>
                )}
              </>
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
            <p className="title-card-name">Jenna</p>
            <p className="title-card-last-name clr-neon-red">Mitchell</p>
          </div>

          <div className="completed-animated-text-container">
            {animationCompletedTitles.length !== 0 &&
              animationCompletedTitles.map((entry, index) => {
                return (
                  <p
                    className={`title-card-animated-text `}
                    key={`completed-job-title--${index}-${activeAnimatedTitleIndex}-${activeAnimatedTitlePosition}-${splitAnimatedTitles[activeAnimatedTitleIndex]}`}
                  >
                    {entry}
                  </p>
                );
              })}
          </div>
          {animationCompletedTitles.length !== animatedTitles.length &&
            activeAnimatedTitlePosition !== 4 && (
              <div className="animated-text-container">
                {splitAnimatedTitles.length !== 0 &&
                  splitAnimatedTitles[activeAnimatedTitleIndex].map(
                    (entry, index) => {
                      return (
                        <div
                          key={`animated-titles-${entry}-${index}-${activeAnimatedTitleIndex}-${activeAnimatedTitlePosition}-${holdAnimationActive}}`}
                        >
                          {entry !== "-" ? (
                            <p
                              className={`title-card-animated-text ${
                                activeAnimatedTitlePosition >= index
                                  ? "display-grid"
                                  : "display-none"
                              }`}
                            >
                              {entry}
                            </p>
                          ) : (
                            <p
                              className={`title-card-animated-text ${
                                activeAnimatedTitlePosition >= index
                                  ? "display-grid"
                                  : "display-none"
                              }`}
                              key={`animated-titles-space-${entry}-${index}-${activeAnimatedTitleIndex}-${activeAnimatedTitlePosition}-${holdAnimationActive}`}
                            >
                              &nbsp;
                            </p>
                          )}
                        </div>
                      );
                    }
                  )}
                {!holdAnimationActive && (
                  <div className="flashing-typing-bar" />
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
