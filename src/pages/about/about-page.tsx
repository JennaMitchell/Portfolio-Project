import PortfolioPic from "../../library/assets/portfolio-pic.png";
import AboutMeCoursesSection from "./about-courses";
import OaklandUniversityImage from "../../library/assets/oakland-university.png";

import { certificationsData } from "./about-me-data";
const AboutPage = (): JSX.Element => {
  return (
    <section className="about-me-section-container">
      <p className="fs-48 clr-primary-000">
        About <span className="fs-48 clr-neon-red ">Me</span>
      </p>

      <div className="about-me-description-container">
        <div className="about-me-description-text-container">
          <p className="fs-48 clr-primary-000">
            I'm a creative <span className="clr-neon-red">web developer</span>{" "}
            based in Lake Orion, MI
          </p>
          <p className="fs-32 clr-primary-000">
            With three years of coding expereience. I have acquired the skills
            and knowledge necessary to make any project a success. I enjoy
            learning and making something new everyday.
          </p>
        </div>
        <img
          className="about-me-image"
          src={PortfolioPic}
          alt="jenna mitchell"
        />
      </div>

      <p className="fs-48 clr-primary-000">
        <span className="fs-48 clr-neon-red ">My &nbsp;</span>
        Education
      </p>
      <div className="about-me-education-container">
        <img
          alt="oakland university campus"
          src={OaklandUniversityImage}
          className="about-me-eductaion-image"
        />
        <div className="about-education-info-container">
          <p className="fs-48 clr-primary-000 fw-bold">Oakland University</p>
          <p className="fs-32 clr-primary-000">Electrical Engineering</p>
          <p className="fs-22 clr-primary-000">
            Specializing in Industrial Robotics and Control System Programming
          </p>
          <p className="fs-22 clr-primary-000">Graduated in December 2018</p>
        </div>
      </div>

      <p className="fs-48 clr-primary-000">
        <span className="fs-48 clr-neon-red ">My&nbsp;</span>
        Certifications
      </p>

      {certificationsData.map((data) => {
        return (
          <div className="about-me-certifications-container">
            <img
              alt="microsoft azure 900 exam"
              src={data.certifacationImage}
              className="about-me-certifications-photo"
            />
            <div className="about-me-certifications-info-container">
              <p className="fs-48 clr-primary-000 fw-bold">
                {data.certificationTitle}
              </p>
              <p className="fs-32 clr-primary-000 clr-neon-lime">
                {data.certificationStatus}
              </p>
              <p className="fs-22 clr-primary-000">
                {data.certificationDescription}
              </p>
              <p className="fs-22 clr-primary-000">
                Issued {data.certificationIssueDate}{" "}
              </p>
            </div>
          </div>
        );
      })}

      <p className="fs-48 clr-primary-000">
        Completed&nbsp;
        <span className="fs-48 clr-neon-red ">Courses</span>
      </p>

      <AboutMeCoursesSection />
    </section>
  );
};
export default AboutPage;
