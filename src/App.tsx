import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomepageMain from "./pages/home/home-main";
import { navStoreActions } from "./library/store/nav-store";

import NavMenu from "./components/nav/nav-menu";
import {
  useAppDispatch,
  useAppSelector,
} from "./library/store/typescript-hooks";
import ProjectsPage from "./pages/projects/projects-page";
import "./sass/main.scss";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomepageMain />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);

function App() {
  const dispatch = useAppDispatch();
  const navMenuActive = useAppSelector((state) => state.nav.navMenuActive);

  const navButtonClickHandler = () => {
    dispatch(navStoreActions.setNavMenuAnimationDirection("in"));
  };
  return (
    <main>
      <button className="nav-button" onClick={navButtonClickHandler}>
        <div data-nav-button-bar="one" className="nav-button-bar" />
        <div data-nav-button-bar="two" className="nav-button-bar" />
        <div data-nav-button-bar="three" className="nav-button-bar" />
      </button>
      {navMenuActive && <NavMenu />}
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
