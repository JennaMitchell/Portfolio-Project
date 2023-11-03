import StarBackground from "../../components/star-background/star-background";

// import TitleCard from "./title-card";
import NavMenuTransition from "../../components/nav/nav-menu-transition";
import TitleCardVertical from "./title-card-vertical";
import NavMenuButton from "../../components/nav/nav-menu-button";
import NavMenu from "../../components/nav/nav-menu";
import { useAppSelector } from "../../library/store/typescript-hooks";
// import ThemePulloutButton from "../../components/theme-pullout/theme-pullout-button";
// import ThemePulloutMenu from "../../components/theme-pullout/theme-pullout-menu";
import DarkModeButton from "../../components/dark-mode/dark-mode-button";
const HomepageMain = (): JSX.Element => {
  const navMenuActive = useAppSelector((state) => state.nav.navMenuActive);

  return (
    <>
      {navMenuActive && <NavMenu />}
      <NavMenuTransition />
      {/* <ThemePulloutButton />
      <ThemePulloutMenu /> */}

      {!navMenuActive && <NavMenuButton />}
      {!navMenuActive && <TitleCardVertical />}
      {!navMenuActive && <StarBackground />}
      <DarkModeButton />
    </>
  );
};
export default HomepageMain;
