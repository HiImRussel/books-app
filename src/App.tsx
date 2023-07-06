/** React */
import { memo } from "react";

/** React router */
import { RouterProvider } from "react-router-dom";

/** Router */
import router from "./router/main.router";

/** RXJS store */
import { isFetchingNewToken$ } from "./rxjsStore/auth.rxjs-store";

/** Hooks */
import useObservable from "./hooks/useObservable";

/** Components */
import LoadingPage from "./pages/LoadingPage/LoadingPage";

const App = () => {
    /** Hooks */
    const isFetchingNewToken = useObservable(isFetchingNewToken$, true);

    if (isFetchingNewToken) return <LoadingPage />;

    return <RouterProvider router={router} />;
};

export default memo(App);
