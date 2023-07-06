/** React */
import { useState } from "react";

/** Redux */
import { useDispatch } from "react-redux";

/** Icons */
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";

/** Styles */
import styles from "./styles.module.scss";

/** Components */
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** Services */
import BooksServiceInstance from "../../../services/books.service";

/** RXJS Store */
import { openEditBookModal } from "../../../store/slices/editBookModal.slice";

/** Types */
interface EditUserButtonProps {
    id: number;
}

const EditBookButton = (props: EditUserButtonProps) => {
    /** Props */
    const { id } = props;

    /** Setup */
    const [isLoading, setIsLoading] = useState(false);

    /** Store */
    const dispatch = useDispatch();

    /** Hanlders */
    const handleEditClick = () =>
        requestParser({
            promise: BooksServiceInstance.getBook(id),
            setIsLoading,
            onSuccess: (data) => dispatch(openEditBookModal(data.data)),
        });

    return (
        <div className={styles["edit-book-button"]} onClick={handleEditClick}>
            {isLoading ? (
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
            ) : (
                <EditIcon />
            )}
        </div>
    );
};

export default EditBookButton;
