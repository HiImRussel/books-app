/** React router */
import { createBrowserRouter } from "react-router-dom";

/** Pages */
import MainPage from "../pages/main/main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
]);

export default router;
