/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface PagetTitleProps {
    text: string;
}

const PageTitle = (props: PagetTitleProps) => {
    /** Props */
    const { text } = props;

    return <h1 className={styles["page-title"]}>{text}</h1>;
};

export default PageTitle;
