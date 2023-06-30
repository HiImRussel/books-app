/** React router */
import { NavLink as RouterNavLink } from "react-router-dom";

/** Class names */
import classNames from "classnames";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import type { LinkProps } from "react-router-dom";

const NavLink = (props: LinkProps) => {
    /** Props */
    const { children } = props;

    return (
        <RouterNavLink
            {...props}
            className={({ isActive }) =>
                classNames(`${styles["nav-link"]}`, {
                    [`${styles["nav-link--active"]}`]: isActive,
                })
            }
        >
            {children}
        </RouterNavLink>
    );
};

export default NavLink;
