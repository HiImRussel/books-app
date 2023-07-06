/** React */
import { useEffect } from "react";

/** React Router */
import { useNavigate } from "react-router-dom";

/** Hooks */
import useObservable from "../../../hooks/useObservable";

/** Constants */
import { APP_URLS } from "../../../constants/app";

/** RXJS store */
import { currentUser$ } from "../../../rxjsStore/auth.rxjs-store";

/** Types */
interface AdminOnlyProps {
    children: React.ReactNode;
}

const AdminOnly = (props: AdminOnlyProps) => {
    /** Props */
    const { children } = props;

    /** Router */
    const naviagtor = useNavigate();

    /** Hooks */
    const user = useObservable(currentUser$);

    /** Lifecycle */
    useEffect(() => {
        if (!user || user.isAdmin) return;

        naviagtor(APP_URLS.HOME);
    }, [user]);

    return <>{children}</>;
};

export default AdminOnly;
