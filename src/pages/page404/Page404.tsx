/** React router */
import { NavLink } from "react-router-dom";

/** Components */
import CentredTemplate from "../../components/templates/Centred/Centred";

/** Styles */
import styles from "./styles.module.scss";
import Button from "../../components/atoms/Button/Button";

const Page404 = () => {
    return (
        <CentredTemplate>
            <h1 className={styles["page-404__title"]}>404</h1>
            <NavLink to="/">
                <Button>Home page</Button>
            </NavLink>
        </CentredTemplate>
    );
};

export default Page404;
