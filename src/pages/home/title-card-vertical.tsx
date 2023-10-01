import PortfolioPic from "../../library/assets/portfolio-pic.png";
import ReactIcon from "../../library/assets/icons/react.png";
import AzureIcon from "../../library/assets/icons/azure.png";
import CssIcon from "../../library/assets/icons/css-3.png";
import HtmlIcon from "../../library/assets/icons/html-5.png";
import JsIcon from "../../library/assets/icons/js.png";
import SassIcon from "../../library/assets/icons/sass.png";
import LinkedInIcon from "../../library/assets/icons/linkedin.png";
import GithubIcon from "../../library/assets/icons/github.png";
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

  const [activeAnimatedTitleIndex, setActiveAnimatedTitleIndex] = useState(0);
  const [activeAnimatedTitlePosition, setActiveAnimatedTitlePosition] =
    useState(0);

  const [splitAnimatedTitles, setSplitAnimatedTitles] = useState<string[][]>(
    []
  );
  const [holdAnimationSecondsCount, setHoldAnimationSecondsCount] =
    useState(10);
  const [holdAnimationActive, setHoldAnimationActive] = useState(false);

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
    const animationTimeout = setTimeout(() => {
      if (
        holdAnimationSecondsCount >= 0 &&
        holdAnimationSecondsCount < 10 &&
        holdAnimationActive
      ) {
        setHoldAnimationSecondsCount(holdAnimationSecondsCount + 1);
      } else if (holdAnimationSecondsCount === 10 && holdAnimationActive) {
        setHoldAnimationActive(false);
        setActiveAnimatedTitlePosition(0);
        if (activeAnimatedTitleIndex === animatedTitles.length - 1) {
          setActiveAnimatedTitleIndex(0);
        } else {
          setActiveAnimatedTitleIndex(activeAnimatedTitleIndex + 1);
        }
      } else {
        if (activeAnimatedTitles.length - 1 === activeAnimatedTitlePosition) {
          setHoldAnimationActive(true);
          setHoldAnimationSecondsCount(0);
        } else {
          setActiveAnimatedTitlePosition(activeAnimatedTitlePosition + 1);
        }
      }
    }, 150);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [
    activeAnimatedTitleIndex,
    activeAnimatedTitlePosition,
    animatedTitles,
    holdAnimationSecondsCount,
    holdAnimationActive,
  ]);

  return (
    <section className="full-window-centered bg-transparent title-card-section-container">
      <div className="languages-vertical-container">
        <div className="title-card-vertical-title-container">
          {languageArray.map((entry: string) => {
            return (
              <p className="ff-base fs-16 clr-primary-000 title-card-vertical-title">
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
          {codeStackArray.map((entry: string) => {
            return (
              <p className="ff-base fs-16 clr-primary-000 title-card-vertical-title">
                {entry}
              </p>
            );
          })}
        </div>
        <div className="code-platform-icon-list-container-vertical">
          <img src={LinkedInIcon} alt="github icon" className="code-icon" />
          <img src={GithubIcon} alt="linkedin icon" className="code-icon" />
        </div>
      </div>

      {/* <div className="card " data-card-type="title">
        <p className="ff-neon ts-neon-red fs-82  clr-neon-red name-text">
          Jenna Mitchell
        </p>
        <p className="ff-base fs-20 clr-primary-000 text-align-right">
          Enuthastistic, team orientated front-end developer.
        </p>
        <div className="tech-stack-container">
          <p className="ff-base fs-16 clr-primary-000 tech-stack-title">
            Tech Stack
          </p>
          <div className="code-platform-icon-list-container">
            <div className="code-icon" />
            <div className="code-icon" />
            <div className="code-icon" />
            <div className="code-icon" />
            <img src={LinkedInIcon} alt="github icon" className="code-icon" />
            <img src={GithubIcon} alt="linkedin icon" className="code-icon" />
          </div>
        </div>
      </div> */}

      <div className="title-card-data-container">
        <div className="title-card-text-container">
          <div className="title-card-name-container">
            <p className="title-card-name">Jenna</p>
            <p className="title-card-last-name">Mitchell</p>
          </div>

          <div className="animated-text-container">
            {splitAnimatedTitles.length !== 0 &&
              splitAnimatedTitles[activeAnimatedTitleIndex].map(
                (entry, index) => {
                  return (
                    <>
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
                        >
                          &nbsp;
                        </p>
                      )}
                    </>
                  );
                }
              )}
            {!holdAnimationActive && <div className="flashing-typing-bar" />}
          </div>
        </div>

        <img src={PortfolioPic} alt="portfolio-pic" className="portfolio-img" />
      </div>
    </section>
  );
};
export default TitleCardVertical;
