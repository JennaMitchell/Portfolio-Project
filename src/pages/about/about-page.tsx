import PortfolioPic from "../../library/assets/portfolio-pic.png";
import AboutMeCoursesSection from "./about-courses";
import OaklandUniversityImage from "../../library/assets/oakland-university.png";

import { certificationsData } from "./about-me-data";
const AboutPage = (): JSX.Element => {
  return (
    <section className="about-me-section-container bg-primary-1000">
      <p className="section-title-text primary-clr-primary-000 lh-82 fs-82">
        About{" "}
        <span className="section-title-text accent-clr-primary-500 lh-82 fs-82">
          Me
        </span>
      </p>

      <div className="about-me-description-container">
        <div className="about-me-description-text-container bg-primary-000">
          <p className="fs-26 primary-clr-primary-1000">
            I'm a creative{" "}
            <span className="accent-clr-primary-500 fs-26">web developer</span>{" "}
            based in Lake Orion, MI
          </p>
          <p className="fs-20 primary-clr-primary-1000">
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

      <p className="section-title-text lh-82 fs-82 accent-clr-primary-500 ">
        <span className="section-title-text lh-82 fs-82 primary-clr-primary-000 ">
          My
        </span>
        &nbsp;Education
      </p>
      <div className="about-me-education-container">
        <img
          alt="oakland university campus"
          src={OaklandUniversityImage}
          className="about-me-education-image"
        />
        <div className="about-education-info-container bg-primary-000">
          <p className="fs-48 primary-clr-primary-1000 fw-bold">
            Oakland University
          </p>
          <p className="fs-32 primary-clr-primary-1000">
            Electrical Engineering
          </p>
          <p className="fs-20 primary-clr-primary-1000">
            Specializing in Industrial Robotics and Control System Programming
          </p>
          <p className="fs-20 primary-clr-primary-1000">
            Graduated in December 2018
          </p>
        </div>
      </div>

      <p className="section-title-text lh-82 fs-82 accent-clr-primary-500">
        <span className="primary-clr-primary-000 section-title-text lh-82 fs-82">
          My&nbsp;
        </span>
        Certifications
      </p>

      {certificationsData.map((data, index) => {
        return (
          <div
            className="about-me-certifications-container bg-primary-000"
            key={`about-me-certifications-container-${index}`}
          >
            <img
              alt="microsoft azure 900 exam"
              src={data.certifacationImage}
              className="about-me-certifications-photo"
            />
            <div className="about-me-certifications-info-container">
              <p className="fs-26 primary-clr-primary-1000 fw-bold">
                {data.certificationTitle}
              </p>
              <p className="fs-22 priamry-clr-primary-1000 clr-neon-lime">
                {data.certificationStatus}
              </p>
              <p className="fs-20 primary-clr-primary-1000">
                {data.certificationDescription}
              </p>
              <p className="fs-20 primary-clr-primary-1000">
                Issued {data.certificationIssueDate}{" "}
              </p>
            </div>
          </div>
        );
      })}

      <p className="primary-clr-primary-000 section-title-text lh-82 fs-82">
        Completed&nbsp;
        <span className="accent-clr-primary-500 section-title-text lh-82 fs-82">
          Courses
        </span>
      </p>

      <AboutMeCoursesSection />
    </section>
  );
};
export default AboutPage;
