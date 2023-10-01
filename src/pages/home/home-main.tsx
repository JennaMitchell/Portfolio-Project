import NavMenu from "../../components/nav/nav-menu";
import StarBackground from "../../components/star-background/star-background";

import { navStoreActions } from "../../library/store/nav-store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../library/store/typescript-hooks";
// import TitleCard from "./title-card";
import TitleCardVertical from "./title-card-vertical";

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

      {/* <TitleCard /> */}
      <TitleCardVertical />
      <StarBackground />
    </>
  );
};
export default HomepageMain;
