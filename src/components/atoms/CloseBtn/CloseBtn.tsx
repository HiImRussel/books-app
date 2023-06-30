/** Icons */
import { ReactComponent as CloseIcon } from "../../../assets/icons/cross-small.svg";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import type { CSSProperties } from "react";

interface CloseBtnProps {
    onClick: () => void;
    style?: CSSProperties;
}

const CloseBtn = (props: CloseBtnProps) => {
    /** Props */
    const { onClick, style } = props;

    return (
        <button className={styles["close-btn"]} style={style} onClick={onClick}>
            <CloseIcon />
        </button>
    );
};

export default CloseBtn;
