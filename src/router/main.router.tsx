/** React router */
import { createBrowserRouter } from "react-router-dom";

/** Constants */
import { APP_URLS } from "../constants/app";

/** Pages */
import MainPage from "../pages/Main/MainPage";
import Page404 from "../pages/Page404/Page404";
import HomeView from "../pages/HomeView/HomeView";
import LibraryView from "../pages/LibraryView/LibraryView";
import LoginPage from "../pages/Login/Login";
import RequireAuth from "../components/core/RequireAuth/RequireAuth";
import NotAuthOnly from "../components/core/NotAuthOnly/NotAuthOnly";
import RegisterPage from "../pages/Register/Register";
import UsersManagementView from "../pages/UsersManagementView/UsersManagementView";
import AdminOnly from "../components/core/AdminOnly/AdminOnly";
import BooksManagementView from "../pages/BooksManagementView/BooksManagementView";
import BooksHistoryView from "../pages/BooksHistoryView/BooksHistoryView";
import UserProfileView from "../pages/UserProfileView/UserProfileView";

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
            { path: APP_URLS.HOME, element: <HomeView /> },
            { path: APP_URLS.USER_PROFILE, element: <UserProfileView /> },
            { path: APP_URLS.LIBRARY, element: <LibraryView /> },
            {
                path: APP_URLS.USERS_MANAGEMENT,
                element: (
                    <AdminOnly>
                        <UsersManagementView />
                    </AdminOnly>
                ),
            },
            {
                path: APP_URLS.BOOKS_MANAGEMENT,
                element: (
                    <AdminOnly>
                        <BooksManagementView />
                    </AdminOnly>
                ),
            },
            {
                path: APP_URLS.BOOKS_HISTORY,
                element: (
                    <AdminOnly>
                        <BooksHistoryView />
                    </AdminOnly>
                ),
            },
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
