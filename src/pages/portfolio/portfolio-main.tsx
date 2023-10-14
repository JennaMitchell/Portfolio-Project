import { useAppSelector } from "../../library/store/typescript-hooks";
import NavMenu from "../../components/nav/nav-menu";
import NavMenuTransition from "../../components/nav/nav-menu-transition";
import ProjectsPage from "./portfolio-page";
import NavMenuButton from "../../components/nav/nav-menu-button";
const PortfolioMain = (): JSX.Element => {
  const navMenuActive = useAppSelector((state) => state.nav.navMenuActive);

  return (
    <>
      {!navMenuActive && <NavMenuButton />}
      {navMenuActive && <NavMenu />}
      <NavMenuTransition />
      {!navMenuActive && <ProjectsPage />}
    </>
  );
};
export default PortfolioMain;
