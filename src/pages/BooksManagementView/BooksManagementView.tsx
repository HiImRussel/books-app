/** RXJS Store */
import isAddBookModalOpen$ from "../../rxjsStore/adBookModal.rxjs-store";

/** Components */
import Button from "../../components/atoms/Button/Button";
import PageTitle from "../../components/atoms/PageTitle/PageTitle";
import BooksTable from "../../components/organisms/BooksTable/BooksTable";
import AddBookModal from "../../components/organisms/AddBookModal/AddBookModal";

const BooksManagementView = () => {
    /** Handlers */
    const handleAddBook = () => isAddBookModalOpen$.next(true);

    return (
        <div>
            <PageTitle text="Books management" />

            <BooksTable />

            <Button buttonProps={{ onClick: handleAddBook }}>Add book</Button>

            <AddBookModal />
        </div>
    );
};

export default BooksManagementView;
