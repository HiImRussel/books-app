/** React router */
import { createBrowserRouter } from "react-router-dom";

/** Pages */
import MainPage from "../pages/main/MainPage";
import Page404 from "../pages/page404/Page404";

const router = createBrowserRouter([
    { path: "*", element: <Page404 /> },
    {
        path: "/",
        element: <MainPage />,
        children: [
            { path: "", element: <div>Home</div> },
            { path: "library", element: <div>Library</div> },
        ],
    },
]);

export default router;
