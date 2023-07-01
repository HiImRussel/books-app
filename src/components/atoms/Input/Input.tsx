/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { type ReactNode, type HTMLProps } from "react";

interface InputProps {
    content?: ReactNode;
    inputProps: HTMLProps<HTMLInputElement>;
}

const Input = (props: InputProps) => {
    /** Props */
    const { content, inputProps } = props;

    return (
        <div className={styles["input-wrapper"]}>
            <input className={styles["input"]} {...inputProps} />

            {content && <div>{content}</div>}
        </div>
    );
};

export default Input;
