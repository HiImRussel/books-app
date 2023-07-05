/** React router */
import { createBrowserRouter } from "react-router-dom";

/** Constants */
import { APP_URLS } from "../constants/app";

/** Pages */
import MainPage from "../pages/Main/MainPage";
import Page404 from "../pages/Page404/Page404";
import HomeView from "../pages/HomeView/HomeView";
import FavouritiesView from "../pages/FavouritiesView/FavouritiesView";
import LoginPage from "../pages/Login/Login";
import RequireAuth from "../components/core/RequireAuth/RequireAuth";
import NotAuthOnly from "../components/core/NotAuthOnly/NotAuthOnly";
import RegisterPage from "../pages/Register/Register";

const router = createBrowserRouter([
    { path: "*", element: <Page404 /> },
    {
        path: APP_URLS.HOME,
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
        path: APP_URLS.LOGIN,
        element: (
            <NotAuthOnly>
                <LoginPage />
            </NotAuthOnly>
        ),
    },
    {
        path: APP_URLS.REGISTER,
        element: (
            <NotAuthOnly>
                <RegisterPage />
            </NotAuthOnly>
        ),
    },
]);

export default router;
