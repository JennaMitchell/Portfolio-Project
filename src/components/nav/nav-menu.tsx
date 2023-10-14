import { useState } from "react";
import { MouseEvent } from "react";
import { navStoreActions } from "../../library/store/nav-store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../library/store/typescript-hooks";

const NavMenu = (): JSX.Element => {
  const activeNavButton = useAppSelector((state) => state.nav.activePage);
  const navButtonsLabels = ["Home", "About", "Portfolio", "Contact"];
  const [activeHoveredElement, setActiveHoveredElement] =
    useState(activeNavButton);
  const dispatch = useAppDispatch();

  const navButtonHandler = (mouseEvent: MouseEvent<HTMLButtonElement>) => {
    const possibleNullTargetElement = mouseEvent.target;
    if (possibleNullTargetElement) {
      const targetElement = possibleNullTargetElement as HTMLButtonElement;
      const targetElementData = targetElement.getAttribute("data-nav-type");
      if (targetElementData) {
        dispatch(navStoreActions.setNavMenuActive(false));
        dispatch(navStoreActions.setNavMenuAnimationDirection("out"));
        dispatch(
          navStoreActions.setActivePage(targetElementData.toLowerCase())
        );
      }
    }
  };

  const closingButtonHandler = () => {
    dispatch(navStoreActions.setNavMenuAnimationDirection("out"));
  };

  const mouseEnterHandler = (mouseEvent: MouseEvent<HTMLButtonElement>) => {
    const possibleNullTargetElement = mouseEvent.target;
    if (possibleNullTargetElement) {
      const targetElement = possibleNullTargetElement as HTMLButtonElement;
      const targetElementData = targetElement.getAttribute("data-nav-type");
      if (targetElementData) {
        targetElementData !== activeHoveredElement &&
          setActiveHoveredElement(targetElementData);
      }
    }
  };
  const mouseLeaveHandler = () => {
    setActiveHoveredElement("");
  };

  return (
    <nav className="nav">
      <div className="nav-background-blur" />

      <button
        className="nav-menu-closing-button "
        onClick={closingButtonHandler}
      >
        X
      </button>

      {navButtonsLabels.map((entry, index) => {
        return (
          <button
            data-nav-type={`${entry.toLocaleLowerCase()}`}
            className={`${
              activeHoveredElement === entry.toLocaleLowerCase() &&
              "nav-home-button-active"
            }  nav-page-selection-button`}
            onClick={navButtonHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            key={`${entry}-${index}`}
          >
            {entry}

            <div
              className={`connecting-dots-dot ${
                activeHoveredElement === entry.toLocaleLowerCase() &&
                "connecting-dots-active"
              }`}
            />
            <div
              className={`connecting-dots-dot-left
              }`}
            />
            <div className={`connecting-dots-dot-right`} />
          </button>
        );
      })}
    </nav>
  );
};
export default NavMenu;
