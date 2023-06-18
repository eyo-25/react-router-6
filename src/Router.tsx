import { createBrowserRouter } from "react-router-dom";
import Root from "@/Root";
import NotFound from "@/components/NotFound";
import ErrorComponent from "@/components/ErrorComponent";
import { HomePage, AboutPage } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
