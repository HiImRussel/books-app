/** React */
import { useEffect } from "react";

/** React router */
import { useNavigate } from "react-router-dom";

/** Constants */
import { APP_URLS } from "../../../constants/app";

/** Hooks */
import useObservable from "../../../hooks/useObservable";

/** RXJS store */
import { currentUser$ } from "../../../rxjsStore/auth.rxjs-store";

/** Types */
interface NotAuthOnlyProps {
    children: React.ReactNode;
}

const NotAuthOnly = (props: NotAuthOnlyProps) => {
    /** Props */
    const { children } = props;

    /** Router */
    const navigation = useNavigate();

    /** Hooks */
    const user = useObservable(currentUser$);

    /** Lifecycle */
    useEffect(() => {
        if (!user || user.id === null) return;

        navigation(APP_URLS.HOME);
    }, [user]);

    /** Rendering */
    if (!user || user.id !== null) return null;

    return <>{children}</>;
};

export default NotAuthOnly;
