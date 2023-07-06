/** React */
import { useState } from "react";

/** Types */
import { ApiError } from "../types/error.types";
interface UseUserFormArgs {
    email?: string;
    password?: string;
    phoneNumber?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    country?: string;
    isAdminChecked?: boolean;
}

const useUserForm = (args: UseUserFormArgs) => {
    /** Setup */
    const [email, setEmail] = useState(args.email || "");
    const [password, setPassword] = useState(args.password || "");
    const [phoneNumber, setPhoneNumber] = useState(args.phoneNumber || "");
    const [address, setAddress] = useState(args.address || "");
    const [city, setCity] = useState(args.city || "");
    const [postalCode, setPostalCode] = useState(args.postalCode || "");
    const [isAdminChecked, setIsAdminChecked] = useState(
        args.isAdminChecked || false
    );
    const [errors, setErrors] = useState<ApiError[]>([]);

    return {
        email,
        setEmail,
        password,
        setPassword,
        phoneNumber,
        setPhoneNumber,
        address,
        setAddress,
        city,
        setCity,
        postalCode,
        setPostalCode,
        isAdminChecked,
        setIsAdminChecked,
        errors,
        setErrors,
    };
};

export default useUserForm;
