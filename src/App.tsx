import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomepageMain from "./pages/home/home-main";
import "./sass/main.scss";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomepageMain />,
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
