import { useEffect, useMemo, useState, useRef } from "react";
import { aboutMeCoursesData } from "./about-me-data";
import { MouseEvent } from "react";

const AboutMeCoursesSection = (): JSX.Element => {
  const completedCoursesContainerRef = useRef<null | HTMLDivElement>(null);
  const courseFirstBarButton = [
    "All",
    "HTML",
    "CSS",
    "SASS",
    "React",
    "SQL",
    "Azure",
    "NoSQL",
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [courseCardAnimation, setCourseCardAnimation] = useState(false);
  const [selectedDataUpdated, setSelectedDataUpdated] = useState(false);

  const [selectedCourseData, setSelectedCourseData] =
    useState(aboutMeCoursesData);
  const allCourseData = useMemo(() => {
    return aboutMeCoursesData;
  }, []);

  const filterButtonClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const targetEvent = event.target;
    if (targetEvent) {
      const notNulLTargetElement = targetEvent as HTMLButtonElement;
      const targetElementDataType = notNulLTargetElement.dataset.coursetype;

      if (targetElementDataType) {
        if (activeFilter !== targetElementDataType) {
          setActiveFilter(targetElementDataType);
        }
      } else {
        setActiveFilter("All");
      }
    }
  };

  useEffect(() => {
    if (activeFilter === "All") {
      setSelectedCourseData(allCourseData);
    } else {
      const filteredCourseData = [];

      for (
        let indexOfAllData = 0;
        indexOfAllData < allCourseData.length;
        indexOfAllData++
      ) {
        const activeEntry = allCourseData[indexOfAllData];
        const activeEntryTags = activeEntry.courseTags;

        for (
          let activeEntryTagsIndex = 0;
          activeEntryTagsIndex < activeEntry.courseTags.length;
          activeEntryTagsIndex++
        ) {
          const activeTag = activeEntryTags[activeEntryTagsIndex];
          if (activeTag === activeFilter) {
            filteredCourseData.push(activeEntry);
          }
        }
      }

      setSelectedCourseData(filteredCourseData);
    }
    setSelectedDataUpdated(true);
    setCourseCardAnimation(false);
  }, [activeFilter, allCourseData]);

  useEffect(() => {
    if (!courseCardAnimation && selectedDataUpdated) {
      setTimeout(() => {
        setCourseCardAnimation(true);
      }, 300);
    }
  }, [courseCardAnimation, selectedDataUpdated]);

  return (
    <div className="about-me-courses-top-container">
      <div className="about-me-filter-buttons-container">
        {courseFirstBarButton.map((entry, index) => {
          return (
            <button
              className={`about-me-filter-button primary-clr-primary-1000 ${
                activeFilter === entry && "about-me-active-filter-button"
              }`}
              data-coursetype={entry}
              onClick={filterButtonClickHandler}
              key={`about-me-filter-button-${index}`}
            >
              {entry}
            </button>
          );
        })}
      </div>

      <div
        className="about-me-active-cards-container"
        ref={completedCoursesContainerRef}
      >
        {selectedCourseData.map((entry, index) => {
          return (
            <div
              className={`about-me-course-card bg-primary-000 ${
                courseCardAnimation
                  ? "about-me-course-card-active"
                  : "about-me-course-card-inactive"
              } `}
              style={{
                transitionDelay: `${courseCardAnimation ? index * 0.75 : "0"}s`,
              }}
              key={`about-me-completed-container${index}`}
            >
              <img src={entry.courseLogo} alt="logo" className="bc-dark" />

              <div className="about-me-card-info-container">
                <p className="about-me-course-title fs-26 fw-bold primary-clr-primary-1000">
                  {entry.courseTitle}
                </p>
                <p className="about-me-course-title fs-22 primary-clr-primary-1000">
                  {entry.courseSource}
                </p>

                <a
                  href={entry.courseLink}
                  className="about-me-filter-button primary-clr-primary-1000 fs-20"
                >
                  More Info
                </a>
                <p className="fs-22 primary-clr-primary-1000">
                  <span className="primary-clr-primary-1000 fw-bold">
                    Skills:&nbsp;
                  </span>
                  {entry.courseTags.map((entry, index) => {
                    if (index === 0) {
                      return `${entry}`;
                    } else {
                      return `, ${entry}`;
                    }
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AboutMeCoursesSection;
