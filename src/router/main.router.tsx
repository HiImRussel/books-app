/** React router */
import { createBrowserRouter } from "react-router-dom";

/** Pages */
import MainPage from "../pages/Main/MainPage";
import Page404 from "../pages/Page404/Page404";
import HomeView from "../pages/HomeView/HomeView";
import FavouritiesView from "../pages/FavouritiesView/FavouritiesView";
import LoginPage from "../pages/Login/Login";
import RequireAuth from "../components/core/RequireAuth/RequireAuth";
import NotAuthOnly from "../components/core/NotAuthOnly/NotAuthOnly";

const router = createBrowserRouter([
    { path: "*", element: <Page404 /> },
    {
        path: "/",
        element: (
            <RequireAuth>
                <MainPage />
            </RequireAuth>
        ),
        children: [
            { path: "", element: <HomeView /> },
            { path: "library", element: <FavouritiesView /> },
        ],
    },
    {
        path: "/login",
        element: (
            <NotAuthOnly>
                <LoginPage />
            </NotAuthOnly>
        ),
    },
]);

export default router;
