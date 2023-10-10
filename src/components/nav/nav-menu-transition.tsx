import { useEffect } from "react";
import { navStoreActions } from "../../library/store/nav-store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../library/store/typescript-hooks";
import { useNavigate } from "react-router-dom";

const NavMenuTransition = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const navMenuAnimationDirection = useAppSelector(
    (state) => state.nav.navMenuAnimationDirection
  );
  const activePage = useAppSelector((state) => state.nav.activePage);
  const navigate = useNavigate();

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      if (navMenuAnimationDirection.length !== 0) {
        if (navMenuAnimationDirection === "out") {
          dispatch(navStoreActions.setNavMenuActive(false));
          dispatch(navStoreActions.setNavMenuAnimationDirection(""));
          navigate(`/${activePage.toLocaleLowerCase()}`);
        }
        if (navMenuAnimationDirection === "in") {
          dispatch(navStoreActions.setNavMenuActive(true));
          dispatch(navStoreActions.setNavMenuAnimationDirection(""));
        }
      }
    }, 900);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [dispatch, navMenuAnimationDirection, activePage, navigate]);

  return (
    <>
      {navMenuAnimationDirection.length !== 0 && (
        <div className="nav-menu-transition-container">
          {navMenuAnimationDirection === "in" && (
            <div className="nav-menu-transition-cheveron-in" />
          )}
          {navMenuAnimationDirection === "out" && (
            <div className="nav-menu-transition-cheveron-out" />
          )}
        </div>
      )}
    </>
  );
};
export default NavMenuTransition;
