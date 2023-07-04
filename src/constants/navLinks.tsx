/** Icons */
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as LibraryIcon } from "../assets/icons/book-copy.svg";

/** Constants */
import { APP_URLS } from "./app";

const navLinks = [
    {
        id: 1,
        to: APP_URLS.HOME,
        Icon: HomeIcon,
    },
    {
        id: 2,
        to: APP_URLS.LIBRARY,
        Icon: LibraryIcon,
    },
];

export default navLinks;
