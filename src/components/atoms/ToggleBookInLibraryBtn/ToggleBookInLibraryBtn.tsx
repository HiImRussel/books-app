/** Redux */
import { useDispatch } from "react-redux";

/** Actions */
import { openBookModal } from "../../../store/slices/bookModal.slice";

/** Services */
import UserLibraryInstance from "../../../services/userLibrary.service";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** RXJS Store */
import { triggerBooksRefresh } from "../../../rxjsStore/booksRefresh.rxjs-store";

/** Incons */
import { ReactComponent as AddIcon } from "../../../assets/icons/add.svg";
import { ReactComponent as MinusIcon } from "../../../assets/icons/minus-circle.svg";

/** Components */
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { CSSProperties, useMemo, useState } from "react";
import { BooksApiBook } from "../../../types/booksApi.types";

interface AddToLibraryBtnProps {
    book: BooksApiBook;
    style?: CSSProperties;
    reloadBookModalData?: boolean;
}

const ToggleBookInLibraryBtn = (props: AddToLibraryBtnProps) => {
    /** Props */
    const { style, book } = props;

    /** Setup */
    const [isLoading, setIsLoading] = useState(false);

    /** Store */
    const dispatch = useDispatch();

    /** Handlers */
    const handleAddClick = () => {
        requestParser({
            promise: UserLibraryInstance.updateBookInLibrary(book.id),
            onSuccess: (data) => {
                triggerBooksRefresh();

                if (!props.reloadBookModalData) return;

                dispatch(openBookModal(data.data));
            },
            setIsLoading,
        });
    };

    /** Rendering */
    const content = useMemo(() => {
        if (isLoading)
            return (
                <LoadingSpinner
                    wrapperStyle={{
                        backgroundColor: "transparent",
                        width: "24px",
                        height: "24px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                    }}
                    spinnerStyle={{
                        borderTop: "4px solid white",
                        width: "16px",
                        height: "16px",
                    }}
                />
            );

        return book?.isInUserLibrary ? <MinusIcon /> : <AddIcon />;
    }, [isLoading, book]);

    return (
        <div
            className={styles["add-to-library-btn"]}
            style={style}
            onClick={handleAddClick}
        >
            {content}
        </div>
    );
};

export default ToggleBookInLibraryBtn;
