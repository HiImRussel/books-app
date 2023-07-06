/** Types */
import useBookFields from "../../../hooks/useBookFields";
import Input from "../../atoms/Input/Input";

const BookFormFields = (args: ReturnType<typeof useBookFields>) => {
    /** Args */
    const {
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
    } = args;

    return (
        <>
            <Input
                inputProps={{
                    value: title,
                    placeholder: "Title",
                    type: "text",
                }}
                label="Title"
                fieldName="title"
                onChange={setTitle}
                errors={errors}
                setErrors={setErrors}
                boxStyle={{ marginBottom: "16px" }}
            />
            <Input
                inputProps={{
                    value: author,
                    placeholder: "Author",
                    type: "text",
                }}
                label="Author"
                fieldName="author"
                onChange={setAuthor}
                errors={errors}
                setErrors={setErrors}
                boxStyle={{ marginBottom: "16px" }}
            />
            <Input
                inputProps={{
                    value: description,
                    placeholder: "Description",
                    type: "text",
                }}
                label="Description"
                fieldName="description"
                onChange={setDescription}
                errors={errors}
                setErrors={setErrors}
                boxStyle={{ marginBottom: "16px" }}
            />
            <Input
                inputProps={{
                    value: quantity,
                    placeholder: "Quantity",
                    type: "number",
                }}
                label="Quantity"
                fieldName="quantity"
                onChange={setQuantity}
                errors={errors}
                setErrors={setErrors}
                boxStyle={{ marginBottom: "16px" }}
            />
            <Input
                inputProps={{
                    value: coverImgURL,
                    placeholder: "Cover Image URL",
                    type: "text",
                }}
                label="Cover Image URL"
                fieldName="coverImgURL"
                onChange={setCoverImgURL}
                errors={errors}
                setErrors={setErrors}
                boxStyle={{ marginBottom: "16px" }}
            />
        </>
    );
};

export default BookFormFields;
