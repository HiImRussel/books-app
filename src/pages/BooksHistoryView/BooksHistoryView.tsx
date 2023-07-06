/** Components */
import PageTitle from "../../components/atoms/PageTitle/PageTitle";
import BooksHistory from "../../components/organisms/BooksHistory/BooksHistory";

const BooksHistoryView = () => {
    return (
        <div>
            <PageTitle text="Books history" />

            <BooksHistory />
        </div>
    );
};

export default BooksHistoryView;
