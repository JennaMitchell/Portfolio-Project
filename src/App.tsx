import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomepageMain from "./pages/home/home-main";

import PortfolioMain from "./pages/portfolio/portfolio-main";
import "./sass/main.scss";
import Root from "./root/root";
import AboutMain from "./pages/about/about-main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <HomepageMain />,
    children: [
      {
        path: "",
        element: <HomepageMain />,
      },
      { path: "portfolio", element: <PortfolioMain /> },
      { path: "about", element: <AboutMain /> },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
