/** Components */
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Input from "../../atoms/Input/Input";

/** Types */
import { ApiError } from "../../../types/error.types";
interface RegisterFormFieldsProps {
    email: string;
    setEmail: (email: string) => void;
    errors: ApiError[];
    setErrors: (errors: ApiError[]) => void;
    password: string;
    setPassword: (password: string) => void;
    phoneNumber: string;
    setPhoneNumber: (phoneNumber: string) => void;
    address: string;
    setAddress: (address: string) => void;
    postalCode: string;
    setPostalCode: (postalCode: string) => void;
    isAdminChecked: boolean;
    setIsAdminChecked: (isAdminChecked: boolean) => void;
    city: string;
    setCity: (city: string) => void;
    isFromAdminPage?: boolean;
    hidePassword?: boolean;
    hideEmail?: boolean;
}

const UserFormFields = (props: RegisterFormFieldsProps) => {
    /** Props */
    const {
        isFromAdminPage,
        email,
        setEmail,
        errors,
        setErrors,
        password,
        setPassword,
        phoneNumber,
        setPhoneNumber,
        address,
        setAddress,
        postalCode,
        setPostalCode,
        isAdminChecked,
        setIsAdminChecked,
        city,
        setCity,
        hidePassword = false,
        hideEmail = false,
    } = props;

    return (
        <>
            {hideEmail || (
                <Input
                    inputProps={{
                        value: email,
                        placeholder: "Email",
                        type: "email",
                    }}
                    onChange={setEmail}
                    setErrors={setErrors}
                    label="Email"
                    fieldName="email"
                    errors={errors}
                    boxStyle={{ marginBottom: "16px" }}
                />
            )}
            {hidePassword || (
                <Input
                    inputProps={{
                        value: password,
                        placeholder: "Password",
                        type: "password",
                    }}
                    onChange={setPassword}
                    setErrors={setErrors}
                    label="Password"
                    fieldName="password"
                    errors={errors}
                    boxStyle={{ marginBottom: "16px" }}
                />
            )}
            <Input
                inputProps={{
                    value: phoneNumber,
                    placeholder: "Phone number",
                    type: "number",
                }}
                onChange={setPhoneNumber}
                setErrors={setErrors}
                label="Phone number"
                fieldName="phoneNumber"
                errors={errors}
                boxStyle={{ marginBottom: "16px" }}
            />
            <Input
                inputProps={{ value: address, placeholder: "Address" }}
                onChange={setAddress}
                setErrors={setErrors}
                label="Address"
                fieldName="address"
                errors={errors}
                boxStyle={{ marginBottom: "16px" }}
            />
            <Input
                inputProps={{ value: city, placeholder: "City" }}
                onChange={setCity}
                setErrors={setErrors}
                label="City"
                fieldName="city"
                errors={errors}
                boxStyle={{ marginBottom: "16px" }}
            />
            <Input
                inputProps={{ value: postalCode, placeholder: "Postal code" }}
                onChange={setPostalCode}
                setErrors={setErrors}
                label="Postal code"
                fieldName="postalCode"
                errors={errors}
                boxStyle={{ marginBottom: "32px" }}
            />

            {isFromAdminPage && (
                <Checkbox
                    isChecked={isAdminChecked}
                    onChange={setIsAdminChecked}
                    label="Is user an administrator"
                    wrapperStyle={{ marginBottom: "32px" }}
                />
            )}
        </>
    );
};

export default UserFormFields;
