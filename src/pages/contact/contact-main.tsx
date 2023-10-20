import { useAppSelector } from "../../library/store/typescript-hooks";
import NavMenu from "../../components/nav/nav-menu";
import NavMenuTransition from "../../components/nav/nav-menu-transition";

import NavMenuButton from "../../components/nav/nav-menu-button";
import ContactPage from "./contact-page";
const ContactMain = (): JSX.Element => {
  const navMenuActive = useAppSelector((state) => state.nav.navMenuActive);

  return (
    <>
      {!navMenuActive && <NavMenuButton />}
      {navMenuActive && <NavMenu />}
      <NavMenuTransition />
      <ContactPage />
    </>
  );
};
export default ContactMain;
