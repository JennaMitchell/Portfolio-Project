import { useAppSelector } from "../../library/store/typescript-hooks";
import NavMenu from "../../components/nav/nav-menu";
import NavMenuTransition from "../../components/nav/nav-menu-transition";

import NavMenuButton from "../../components/nav/nav-menu-button";
import EducationPage from "./about-page";
// import ThemePulloutButton from "../../components/theme-pullout/theme-pullout-button";
// import ThemePulloutMenu from "../../components/theme-pullout/theme-pullout-menu";
import DarkModeButton from "../../components/dark-mode/dark-mode-button";

const AboutMain = (): JSX.Element => {
  const navMenuActive = useAppSelector((state) => state.nav.navMenuActive);

  return (
    <>
      {!navMenuActive && <NavMenuButton />}
      {navMenuActive && <NavMenu />}
      <NavMenuTransition />
      <EducationPage />
      {/* <ThemePulloutButton />
      <ThemePulloutMenu /> */}
      <DarkModeButton />
    </>
  );
};
export default AboutMain;
