/** React */
import { useEffect } from "react";

const useEscapeClick = (callBack: () => void) => {
    useEffect(() => {
        const handleEscapeClick = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            callBack();
        };

        document.addEventListener("keydown", handleEscapeClick);

        return () => document.removeEventListener("keydown", handleEscapeClick);
    }, []);
};

export default useEscapeClick;
