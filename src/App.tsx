import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomepageMain from "./pages/home/home-main";

import ProjectsMain from "./pages/projects/projects-main";
import "./sass/main.scss";
import Root from "./root/root";

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
      { path: "projects", element: <ProjectsMain /> },
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
