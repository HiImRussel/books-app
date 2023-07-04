/** React */
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

/** Class Names */
import classNames from "classnames";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface ButtonProps {
    children: ReactNode;
    isLoading?: boolean;
    fullWidth?: boolean;
    buttonProps?: DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >;
}

const Button = (props: ButtonProps) => {
    const { children, isLoading, buttonProps, fullWidth } = props;

    return (
        <button
            {...buttonProps}
            className={classNames(styles["button"], buttonProps?.className, {
                [styles["button--full-width"]]: fullWidth,
            })}
        >
            {children}
        </button>
    );
};

export default Button;
