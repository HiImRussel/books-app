/** Icons */
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as LibraryIcon } from "../assets/icons/book-copy.svg";
import { ReactComponent as UsersIcon } from "../assets/icons/users-alt.svg";
import { ReactComponent as BooksManagementIcon } from "../assets/icons/books-medical.svg";
import { ReactComponent as HistoryIcon } from "../assets/icons/time-past.svg";

/** Constants */
import { APP_URLS } from "./app";

/** Types */
interface LinkType {
    id: number;
    to: string;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    visibleForAdminOnly?: boolean;
}

const navLinks: LinkType[] = [
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
    {
        id: 3,
        to: APP_URLS.USERS_MANAGEMENT,
        Icon: UsersIcon,
        visibleForAdminOnly: true,
    },
    {
        id: 4,
        to: APP_URLS.BOOKS_MANAGEMENT,
        Icon: BooksManagementIcon,
        visibleForAdminOnly: true,
    },
    {
        id: 5,
        to: APP_URLS.BOOKS_HISTORY,
        Icon: HistoryIcon,
        visibleForAdminOnly: true,
    },
];

export default navLinks;
