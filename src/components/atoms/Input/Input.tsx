/** React */
import { useMemo, useRef } from "react";

/** UUID */
import { v4 as uuidv4 } from "uuid";

/** Class Names */
import classNames from "classnames";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { type ReactNode, type HTMLProps, CSSProperties } from "react";
import { ApiError } from "../../../types/error.types";

interface InputProps {
    content?: ReactNode;
    wrapperStyle?: CSSProperties;
    boxStyle?: CSSProperties;
    label?: string;
    errors?: ApiError[];
    fieldName?: string;
    inputProps: HTMLProps<HTMLInputElement>;
}

const Input = (props: InputProps) => {
    /** Props */
    const {
        content,
        inputProps,
        wrapperStyle,
        label,
        fieldName,
        errors,
        boxStyle,
    } = props;

    /** Ref */
    const id = useRef(uuidv4());

    /** Data */
    const error = useMemo(
        () => errors?.find((e) => e.field === fieldName),
        [errors, fieldName]
    );

    return (
        <div style={boxStyle}>
            {label && label?.length > 0 && (
                <label className={styles["label"]} htmlFor={id.current}>
                    {label}
                </label>
            )}

            <div
                className={classNames(styles["input-wrapper"], {
                    [styles["input-wrapper--error"]]: error,
                })}
                style={wrapperStyle}
            >
                <input
                    className={styles["input"]}
                    {...inputProps}
                    id={id.current}
                />

                {content && <div>{content}</div>}
            </div>

            {error && (
                <span className={styles["error-msg"]}>{error.message}</span>
            )}
        </div>
    );
};

export default Input;
