import { useState } from "react";
import { MouseEvent } from "react";
const NavMenu = (): JSX.Element => {
  const [activeNavButton, setActiveNavButton] = useState("home");

  const navButtonHandler = (mouseEvent: MouseEvent<HTMLButtonElement>) => {
    const possibleNullTargetElement = mouseEvent.target;
    if (possibleNullTargetElement) {
      const targetElement = possibleNullTargetElement as HTMLButtonElement;
      const targetElementData = targetElement.getAttribute("data-nav-type");
      targetElementData && setActiveNavButton(targetElementData);
    }
  };

  return (
    <nav className="nav">
      <button className="nav-menu-closing-button">X</button>
      <button
        data-nav-type="home"
        className={`${activeNavButton === "home" && "nav-home-button-active"}`}
        onClick={navButtonHandler}
      >
        Home
      </button>
      <button
        data-nav-type="education"
        className={`${
          activeNavButton === "education" && "nav-education-button-active"
        }`}
        onClick={navButtonHandler}
      >
        Education
      </button>
      <button
        data-nav-type="projects"
        className={`${
          activeNavButton === "projects" && "nav-projects-button-active"
        }`}
        onClick={navButtonHandler}
      >
        Projects
      </button>
      <button
        data-nav-type="certificates"
        className={`${
          activeNavButton === "certificates" && "nav-certificates-button-active"
        }`}
        onClick={navButtonHandler}
      >
        Certificates
      </button>
    </nav>
  );
};
export default NavMenu;
