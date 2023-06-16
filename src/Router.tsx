import { createBrowserRouter } from "react-router-dom"
import Root from "./Root";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFound from "./components/NotFound";
import ErrorComponent from "./components/ErrorComponent";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Root />,
    children: [
        {
            path: "",
            element: <HomePage />,
            errorElement: <ErrorComponent />
        },
        {
            path: "about",
            element: <AboutPage />,
        }
    ],
    errorElement: <NotFound />
}
]);

export default router;