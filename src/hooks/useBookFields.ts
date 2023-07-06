/** React */
import { useState } from "react";

/** Types */
import { ApiError } from "../types/error.types";

interface UseBookFields {
    title?: string;
    author?: string;
    description?: string;
    quantity?: number;
    coverImgURL?: string;
}

const useBookFields = (args: UseBookFields) => {
    const [title, setTitle] = useState(args.title || "");
    const [author, setAuthor] = useState(args.author || "");
    const [description, setDescription] = useState(args.description || "");
    const [quantity, setQuantity] = useState(args.quantity || "");
    const [coverImgURL, setCoverImgURL] = useState(args.coverImgURL || "");
    const [errors, setErrors] = useState<ApiError[]>([]);

    return {
        title,
        setTitle,
        author,
        setAuthor,
        description,
        setDescription,
        quantity,
        setQuantity,
        coverImgURL,
        setCoverImgURL,
        errors,
        setErrors,
    };
};

export default useBookFields;
