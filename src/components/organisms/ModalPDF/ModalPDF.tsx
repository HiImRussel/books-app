/** Redux */
import { useDispatch, useSelector } from "react-redux";

/** Store */
import { toggleModal } from "../../../store/slices/pdfModal.slice";

/** Components */
import ReaderPDF from "../../molecules/ReaderPDF/ReaderPDF";
import Modal from "../Modal/Modal";

/** Types */
import type { RootState } from "../../../store/root.store";

const ModalPDF = () => {
    /** Store */
    const { isOpen, pdfURL } = useSelector(
        (state: RootState) => state.pdfModal
    );
    const dispatch = useDispatch();

    /** Handlers */
    const handleCloseModal = () =>
        dispatch(toggleModal({ isOpen: false, pdfURL: "" }));

    return (
        <Modal isOpen={isOpen} setIsOpen={handleCloseModal}>
            <ReaderPDF pdfURL={pdfURL} />
        </Modal>
    );
};

export default ModalPDF;
