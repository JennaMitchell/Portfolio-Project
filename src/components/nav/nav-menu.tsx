import { useState } from "react";
import { MouseEvent } from "react";
import { navStoreActions } from "../../library/store/nav-store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../library/store/typescript-hooks";
const NavMenu = (): JSX.Element => {
  const activeNavButton = useAppSelector((state) => state.nav.activePage);
  const dispatch = useAppDispatch();
  const [buttonHoveredText, setButtonHoveredText] = useState("");
  const navButtonHandler = (mouseEvent: MouseEvent<HTMLButtonElement>) => {
    const possibleNullTargetElement = mouseEvent.target;
    if (possibleNullTargetElement) {
      const targetElement = possibleNullTargetElement as HTMLButtonElement;
      const targetElementData = targetElement.getAttribute("data-nav-type");
      if (targetElementData) {
        dispatch(navStoreActions.setNavMenuActive(false));
        dispatch(
          navStoreActions.setActivePage(targetElementData.toLowerCase())
        );
      }
    }
  };

  const mouseMoveInHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;

    let targetHTML = target.innerHTML;

    buttonHoveredText !== targetHTML && setButtonHoveredText(targetHTML);
  };
  const mouseMoveOutHandler = () => {
    setButtonHoveredText("");
  };

  const closingButtonHandler = () => {
    dispatch(navStoreActions.setNavMenuAnimationDirection("out"));
  };

  return (
    <nav className="nav">
      <div className="nav-background-blur" />
      <p
        className={`background-nav-text ${
          buttonHoveredText.length !== 0
            ? "background-nav-test-animation-on"
            : "background-nav-text-animation-off"
        }
        
        ${buttonHoveredText === "Home" && "clr-neon-red  ts-neon-red"}
        ${
          buttonHoveredText === "Education" && "clr-neon-yellow  ts-neon-yellow"
        }
        ${buttonHoveredText === "Projects" && "clr-neon-orange  ts-neon-orange"}
        ${buttonHoveredText === "Certificates" && "clr-neon-lime  ts-neon-lime"}
        
        `}
      >
        {buttonHoveredText}
      </p>

      <button
        className="nav-menu-closing-button "
        onClick={closingButtonHandler}
      >
        X
      </button>
      <button
        data-nav-type="home"
        className={`${
          activeNavButton === "home" && "nav-home-button-active"
        }  nav-page-selection-button`}
        onClick={navButtonHandler}
        onMouseEnter={mouseMoveInHandler}
        onMouseLeave={mouseMoveOutHandler}
      >
        Home
      </button>
      <button
        data-nav-type="education"
        className={`${
          activeNavButton === "education" && "nav-education-button-active"
        } nav-page-selection-button`}
        onClick={navButtonHandler}
        onMouseEnter={mouseMoveInHandler}
        onMouseLeave={mouseMoveOutHandler}
      >
        Education
      </button>
      <button
        data-nav-type="projects"
        className={`${
          activeNavButton === "projects" && "nav-projects-button-active"
        } nav-page-selection-button`}
        onClick={navButtonHandler}
        onMouseEnter={mouseMoveInHandler}
        onMouseLeave={mouseMoveOutHandler}
      >
        Projects
      </button>
      <button
        data-nav-type="certificates"
        className={`${
          activeNavButton === "certificates" && "nav-certificates-button-active"
        } nav-page-selection-button`}
        onClick={navButtonHandler}
        onMouseEnter={mouseMoveInHandler}
        onMouseLeave={mouseMoveOutHandler}
      >
        Certificates
      </button>
    </nav>
  );
};
export default NavMenu;
