/** Icons */
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as LibraryIcon } from "../assets/icons/book-copy.svg";

const navLinks = [
    {
        id: 1,
        to: "/",
        Icon: HomeIcon,
    },
    {
        id: 2,
        to: "/library",
        Icon: LibraryIcon,
    },
];

export default navLinks;
