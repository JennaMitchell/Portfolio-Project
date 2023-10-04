const ProjectsPage = (): JSX.Element => {
  const accordianCardsTempData = [
    {
      projectTitle: "title 1",
      projectDescription: "description here",
      projectUrl: "sdasdsa",
    },
    {
      projectTitle: "title 2",
      projectDescription: "description here",
      projectUrl: "sdasdsa",
    },
    {
      projectTitle: "title 3",
      projectDescription: "description here",
      projectUrl: "sdasdsa",
    },
    {
      projectTitle: "title 4",
      projectDescription: "description here",
      projectUrl: "sdasdsa",
    },
    {
      projectTitle: "title 5",
      projectDescription: "description here",
      projectUrl: "sdasdsa",
    },
  ];
  return (
    <section className="full-window-centered bg-transparent flex-column-j-start-a-center projects-section-container">
      <div className="title-text-container">
        <p className="fs-48 clr-primary-000 "> My</p>
        <p className="fs-48 clr-neon-red"> Portfolio</p>
      </div>
      <div className="title-text-container">
        <p className="fs-22 clr-primary-000">Some of My</p>
        <p className="fs-22 clr-neon-red">Works</p>
      </div>

      <div className="projects-accordion-container">
        {accordianCardsTempData.map((data, index) => {
          return (
            <div
              className="projects-accordion-card"
              key={`${data.projectTitle}-${index}`}
            ></div>
          );
        })}
      </div>
    </section>
  );
};
export default ProjectsPage;
