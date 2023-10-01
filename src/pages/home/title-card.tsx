import PortfolioPic from "../../library/assets/portfolio-pic.png";
import ReactIcon from "../../library/assets/icons/react.png";
import AzureIcon from "../../library/assets/icons/azure.png";
import CssIcon from "../../library/assets/icons/css-3.png";
import HtmlIcon from "../../library/assets/icons/html-5.png";
import JsIcon from "../../library/assets/icons/js.png";
import SassIcon from "../../library/assets/icons/sass.png";
import LinkedInIcon from "../../library/assets/icons/linkedin.png";
import GithubIcon from "../../library/assets/icons/github.png";
const TitleCard = (): JSX.Element => {
  return (
    <section className="full-window-centered grid-two-column-parent-container bg-transparent">
      <div className="card " data-card-type="title">
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

        <div className="tech-stack-container">
          <p className="ff-base fs-16 clr-primary-000 tech-stack-title">
            Languages
          </p>
          <div className="code-platform-icon-list-container">
            <img src={ReactIcon} alt="react icon" className="code-icon" />
            <img src={JsIcon} alt="js icon" className="code-icon" />

            <img src={HtmlIcon} alt="html icon" className="code-icon" />
            <img src={SassIcon} alt="sass icon" className="code-icon" />
            <img src={CssIcon} alt="css icon" className="code-icon" />
            <img src={AzureIcon} alt="azure icon" className="code-icon" />
          </div>
        </div>
      </div>
      <div className="flex-column-100-center portfolio-pic-container">
        <img src={PortfolioPic} alt="portfolio-pic" className="portfolio-img" />
        <div className="glow-circle glow-circle-1" />
        <div className="glow-circle glow-circle-2" />
        <div className="glow-circle glow-circle-3" />
      </div>
    </section>
  );
};
export default TitleCard;
