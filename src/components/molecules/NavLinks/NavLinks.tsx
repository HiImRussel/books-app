/** React */
import { useMemo } from "react";

/** Constants */
import navLinks from "../../../constants/navLinks";

/** Components */
import NavLink from "../../atoms/NavLink/NavLink";
import SearchToggle from "../../atoms/SearchToggle/SearchToggle";

/** Styles */
import styles from "./styles.module.scss";

const NavLinks = () => {
    /** Data */
    const links = useMemo(
        () =>
            navLinks.map((link) => (
                <NavLink key={link.id} to={link.to}>
                    {link.Icon({})}
                </NavLink>
            )),
        []
    );

    return (
        <div className={styles["nav-links"]}>
            {links}
            <SearchToggle />
        </div>
    );
};

export default NavLinks;
