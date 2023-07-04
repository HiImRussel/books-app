/** React router */
import { createBrowserRouter } from "react-router-dom";

/** Pages */
import MainPage from "../pages/Main/MainPage";
import Page404 from "../pages/Page404/Page404";
import HomeView from "../pages/HomeView/HomeView";
import FavouritiesView from "../pages/FavouritiesView/FavouritiesView";
import LoginPage from "../pages/Login/Login";

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
    {
        path: "/login",
        element: <LoginPage />,
    },
]);

export default router;
