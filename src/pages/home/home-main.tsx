import NavMenu from "../../components/nav/nav-menu";
import StarBackground from "../../components/star-background/star-background";

import { navStoreActions } from "../../library/store/nav-store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../library/store/typescript-hooks";
import TitleCard from "./title-card";

const HomepageMain = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navMenuActive = useAppSelector((state) => state.nav.navMenuActive);

  const navButtonClickHandler = () => {
    dispatch(navStoreActions.setNavMenuActive(true));
  };

  return (
    <>
      <button className="nav-button" onClick={navButtonClickHandler}>
        <div data-nav-button-bar="one" className="nav-button-bar" />
        <div data-nav-button-bar="two" className="nav-button-bar" />
        <div data-nav-button-bar="three" className="nav-button-bar" />
      </button>

      {navMenuActive && <NavMenu />}
      {/* <button
        style={{
          width: "200px",
          height: "50px",
          position: "fixed",
          top: "50px",
          left: "50px",
          zIndex: "100",
        }}
        onClick={triggerButton}
      >
        Trigger
      </button> */}

      <TitleCard />
      <StarBackground />
    </>
  );
};
export default HomepageMain;
