/** Redux */
import { useDispatch, useSelector } from "react-redux";

/** Store */
import { toggleSeachModal } from "../../../store/slices/searchModal.slice";

/** Components */
import Modal from "../Modal/Modal";
import SearchBox from "../SearchBox/SearchBox";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import type { RootState } from "../../../store/root.store";

const SearchModal = () => {
    /** Store */
    const { isOpen } = useSelector((state: RootState) => state.searchModal);
    const dispatch = useDispatch();

    /** Handlers */
    const handleClose = () => dispatch(toggleSeachModal(false));

    return (
        <Modal isOpen={isOpen} setIsOpen={handleClose}>
            <div className={styles["search-modal"]}>
                <SearchBox />
            </div>
        </Modal>
    );
};

export default SearchModal;
