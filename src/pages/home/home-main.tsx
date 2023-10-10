import StarBackground from "../../components/star-background/star-background";

// import TitleCard from "./title-card";
import NavMenuTransition from "../../components/nav/nav-menu-transition";
import TitleCardVertical from "./title-card-vertical";
import NavMenuButton from "../../components/nav/nav-menu-button";
import NavMenu from "../../components/nav/nav-menu";
import { useAppSelector } from "../../library/store/typescript-hooks";
const HomepageMain = (): JSX.Element => {
  const navMenuActive = useAppSelector((state) => state.nav.navMenuActive);

  return (
    <>
      {navMenuActive && <NavMenu />}
      <NavMenuTransition />

      {!navMenuActive && <NavMenuButton />}
      {!navMenuActive && <TitleCardVertical />}
      {!navMenuActive && <StarBackground />}
    </>
  );
};
export default HomepageMain;
