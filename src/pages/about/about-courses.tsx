import { useEffect, useMemo, useState } from "react";
import { aboutMeCoursesData } from "./about-me-data";
import { MouseEvent } from "react";

const AboutMeCoursesSection = (): JSX.Element => {
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
      console.log(targetElementDataType);
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
  }, [activeFilter, allCourseData]);

  return (
    <div className="about-me-education-container">
      <div className="about-me-filter-buttons-container">
        {courseFirstBarButton.map((entry) => {
          return (
            <button
              className={`about-me-filter-button ${
                activeFilter === entry && "about-me-active-filter-button"
              }`}
              data-coursetype={entry}
              onClick={filterButtonClickHandler}
            >
              {entry}
            </button>
          );
        })}
      </div>

      <div className="about-me-active-cards-container">
        {selectedCourseData.map((entry, index) => {
          return (
            <div
              className={`about-me-course-card ${
                index !== 0 && "about-me-course-card"
              }`}
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
                <button>More Info</button>
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
