import StarBackground from "../../components/star-background/star-background";

// import TitleCard from "./title-card";
import NavMenuTransition from "../../components/nav/nav-menu-transition";
import TitleCardVertical from "./title-card-vertical";

const HomepageMain = (): JSX.Element => {
  return (
    <>
      <NavMenuTransition />

      {/* <TitleCard /> */}
      <TitleCardVertical />
      <StarBackground />
    </>
  );
};
export default HomepageMain;
