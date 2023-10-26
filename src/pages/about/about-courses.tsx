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
    setCourseCardAnimation(true);
  }, [activeFilter, allCourseData]);

  useEffect(() => {
    if (courseCardAnimation) {
      setTimeout(() => {
        setCourseCardAnimation(false);
      }, 300);
    }
  }, [courseCardAnimation]);

  return (
    <div className="about-me-education-container">
      <div className="about-me-filter-buttons-container">
        {courseFirstBarButton.map((entry, index) => {
          return (
            <button
              className={`about-me-filter-button ${
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
        style={{ height: `${selectedCourseData.length * 240}px` }}
        ref={completedCoursesContainerRef}
      >
        {selectedCourseData.map((entry, index) => {
          return (
            <div
              className={`about-me-course-card ${
                courseCardAnimation
                  ? "about-me-course-card-animation-start"
                  : "about-me-course-card-animation-end"
              }`}
              style={{
                top: `${courseCardAnimation ? "0px" : `${index * 240}px`}`,
                opacity: `${courseCardAnimation ? "0" : "1"}`,
              }}
              key={`about-me-completed-container${index}`}
            >
              <img src={entry.courseLogo} alt="logo" />

              <div className="about-me-card-info-container">
                <p className="about-me-course-title fs-32 fw-bold">
                  {entry.courseTitle}
                </p>
                <p className="about-me-course-title fs-22 ">
                  {entry.courseSource}
                </p>
                {/* <p className="about-me-course-title fs-32">
          {entry.courseTitle}
        </p> */}
                <a href={entry.courseLink}>More Info</a>
                <p className="fs-22">
                  <span className="clr-black fw-bold">Skills:&nbsp;</span>
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
