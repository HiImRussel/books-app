/** RXJS Store */
import isAddBookModalOpen$ from "../../rxjsStore/adBookModal.rxjs-store";

/** Components */
import Button from "../../components/atoms/Button/Button";
import PageTitle from "../../components/atoms/PageTitle/PageTitle";
import BooksTable from "../../components/organisms/BooksTable/BooksTable";
import AddBookModal from "../../components/organisms/AddBookModal/AddBookModal";
import EditBookModal from "../../components/organisms/EditBookModal/EditBookModal";

const BooksManagementView = () => {
    /** Handlers */
    const handleAddBook = () => isAddBookModalOpen$.next(true);

    return (
        <div>
            <PageTitle text="Books management" />

            <BooksTable />

            <Button
                buttonProps={{
                    onClick: handleAddBook,
                    style: { marginTop: "16px" },
                }}
            >
                Add book
            </Button>

            <AddBookModal />
            <EditBookModal />
        </div>
    );
};

export default BooksManagementView;
