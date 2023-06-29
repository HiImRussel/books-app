/** React router */
import { Link } from "react-router-dom";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import type { LinkProps } from "react-router-dom";

const NavLink = (props: LinkProps) => {
    /** Props */
    const { children } = props;

    return (
        <Link {...props} className={styles["nav-link"]}>
            {children}
        </Link>
    );
};

export default NavLink;
