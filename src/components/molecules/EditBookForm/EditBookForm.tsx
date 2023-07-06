/** React */
import { useState } from "react";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** Hooks */
import useBookFields from "../../../hooks/useBookFields";

/** RXJS Store */
import { triggerBooksRefresh } from "../../../rxjsStore/booksRefresh.rxjs-store";

/** Services */
import BooksServiceInstance from "../../../services/books.service";

/** Components */
import Button from "../../atoms/Button/Button";
import BookFormFields from "../BookFormFields/BookFormFields";

/** Types */
import { BooksApiBook } from "../../../types/booksApi.types";
interface EditBookFormProps {
    book: BooksApiBook;
}

const EditBookForm = (props: EditBookFormProps) => {
    /** Props */
    const { book } = props;

    /** Setup */
    const [isLoading, setIsLoading] = useState(false);

    /** Hooks */
    const formFields = useBookFields({
        title: book.title,
        author: book.author || "",
        description: book.description || "",
        quantity: `${book.quantity}`,
        coverImgURL: book.coverImgURL || "",
    });

    /** Handlers */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (isLoading) return;

        e.preventDefault();

        requestParser({
            promise: BooksServiceInstance.editBook(book.id, {
                title: formFields.title,
                author: formFields.author,
                description: formFields.description,
                quantity: +formFields.quantity,
                coverImgURL: formFields.coverImgURL,
            }),
            setIsLoading,
            onSuccess: () => {
                triggerBooksRefresh();
            },
            onError: formFields.setErrors,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <BookFormFields {...formFields} />
            <Button fullWidth>{isLoading ? "Loading..." : "Save"}</Button>
        </form>
    );
};

export default EditBookForm;
