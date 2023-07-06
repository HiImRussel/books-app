/** React */
import { useMemo } from "react";

/** Constants */
import navLinks from "../../../constants/navLinks";

/** Components */
import NavLink from "../../atoms/NavLink/NavLink";
import SearchToggle from "../../atoms/SearchToggle/SearchToggle";
import LogOutBtn from "../../atoms/LogOutBtn/LogOutBtn";

/** Styles */
import styles from "./styles.module.scss";
import classNames from "classnames";

/** Types */
interface NavLinksProps {
    isMobile?: boolean;
}

const NavLinks = (props: NavLinksProps) => {
    /** Props */
    const { isMobile } = props;

    /** Data */
    const links = useMemo(
        () =>
            navLinks.map((link) => (
                <NavLink
                    key={link.id}
                    to={link.to}
                    visibleForAdminOnly={link?.visibleForAdminOnly}
                >
                    {link.Icon({})}
                </NavLink>
            )),
        []
    );

    return (
        <div
            className={classNames(styles["nav-links"], {
                [styles["nav-links--mobile"]]: isMobile,
            })}
        >
            <div>
                {links}
                <SearchToggle />
            </div>

            <LogOutBtn />
        </div>
    );
};

export default NavLinks;
