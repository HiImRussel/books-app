/** React router */
import { createBrowserRouter } from "react-router-dom";

/** Pages */
import MainPage from "../pages/Main/MainPage";
import Page404 from "../pages/Page404/Page404";
import HomeView from "../pages/HomeView/HomeView";
import FavouritiesView from "../pages/FavouritiesView/FavouritiesView";

const router = createBrowserRouter([
    { path: "*", element: <Page404 /> },
    {
        path: "/",
        element: <MainPage />,
        children: [
            { path: "", element: <HomeView /> },
            { path: "library", element: <FavouritiesView /> },
        ],
    },
]);

export default router;
