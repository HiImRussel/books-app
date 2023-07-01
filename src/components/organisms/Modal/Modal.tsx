/** React */
import { useRef } from "react";

/** Hooks */
import useOutsideClick from "../../../hooks/useClickOutside";
import useEscapeClick from "../../../hooks/useEscapeClick";

/** Styles */
import CloseBtn from "../../atoms/CloseBtn/CloseBtn";
import styles from "./styles.module.scss";

/** Types */
import { type CSSProperties } from "react";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

/** Inline Styles */
const closeBtnStyle: CSSProperties = {
    position: "absolute",
    top: "16px",
    right: "16px",
};

const Modal = (props: ModalProps) => {
    /** Props */
    const { children, isOpen, setIsOpen } = props;

    /** Refs */
    const contentRef = useRef(null);

    /** Handlers */
    const handleClose = () => setIsOpen(false);

    /** Hooks */
    useOutsideClick(contentRef, handleClose);
    useEscapeClick(handleClose);

    if (!isOpen) return null;

    return (
        <div className={styles["modal"]}>
            <CloseBtn onClick={handleClose} style={closeBtnStyle} />
            <div ref={contentRef}>{children}</div>
        </div>
    );
};

export default Modal;
