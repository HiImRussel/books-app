/** React */
import { memo, useEffect } from "react";

/** React router */
import { RouterProvider } from "react-router-dom";

/** Router */
import router from "./router/main.router";

/** RXJS store */
import { isFetchingNewToken$, fetchToken } from "./rxjsStore/auth.rxjs-store";

/** Hooks */
import useObservable from "./hooks/useObservable";

const App = () => {
    /** Hooks */
    const isFetchingNewToken = useObservable(isFetchingNewToken$, false);

    return (
        <>
            {isFetchingNewToken ? (
                <span>Fetching new token...</span>
            ) : (
                <RouterProvider router={router} />
            )}
        </>
    );
};

export default memo(App);
