/** Rxjs */
import { BehaviorSubject } from "rxjs";

/** Constants */
import {
    JWT_TOKEN_LOCAL_STORAGE_KEY_NAME,
    REFRESH_TOKEN_DELAY_IN_SECOND,
} from "../constants/auth";

/** Types */
import { User } from "../types/user.types";
import requestParser from "../helpers/requestParser";
import AuthServiceInstance from "../services/auth.service";

const sessionRefreshTimeout$ = new BehaviorSubject<NodeJS.Timer | null>(null);
const currentUser$ = new BehaviorSubject<User | null>(null);
const isFetchingNewToken$ = new BehaviorSubject(false);

const setToken = (token: string) => {
    localStorage.setItem(JWT_TOKEN_LOCAL_STORAGE_KEY_NAME, token);
    console.log(token, "tokenLog");
};

const setFetchingNewToken = (isFetching: boolean) =>
    isFetchingNewToken$.next(isFetching);

const fetchToken = (trackFetchingProgress?: boolean) =>
    requestParser(
        AuthServiceInstance.refreshToken(),
        trackFetchingProgress ? setFetchingNewToken : undefined,
        undefined,
        undefined,
        (data) => {
            if (!data.token || data.expireTime) return;

            setToken(data.token);
            createRefreshTokenInterval(data.expireTime);
        }
    );

const createRefreshTokenInterval = (expireTime: number) => {
    const sessionRefreshTimeout = sessionRefreshTimeout$.getValue();

    if (sessionRefreshTimeout) {
        clearTimeout(sessionRefreshTimeout);
    }

    const interval = setTimeout(
        fetchToken,
        (expireTime - REFRESH_TOKEN_DELAY_IN_SECOND) * 1000
    );

    sessionRefreshTimeout$.next(interval);
};

const setAuthSession = (user: User, token: string, expireTime: number) => {
    currentUser$.next(user);

    setToken(token);
    createRefreshTokenInterval(expireTime);
};

fetchToken(true);

export { currentUser$, isFetchingNewToken$, setAuthSession, fetchToken };
