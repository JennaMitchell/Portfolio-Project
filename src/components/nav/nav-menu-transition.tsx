import { useEffect } from "react";
import { navStoreActions } from "../../library/store/nav-store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../library/store/typescript-hooks";

const NavMenuTransition = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const navMenuAnimationDirection = useAppSelector(
    (state) => state.nav.navMenuAnimationDirection
  );

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      if (navMenuAnimationDirection.length !== 0) {
        navMenuAnimationDirection === "out" &&
          dispatch(navStoreActions.setNavMenuActive(false));
        navMenuAnimationDirection === "in" &&
          dispatch(navStoreActions.setNavMenuActive(true));
        dispatch(navStoreActions.setNavMenuAnimationDirection(""));
      }
    }, 400);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [dispatch, navMenuAnimationDirection]);

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
