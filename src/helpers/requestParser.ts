/** Axios */
import { AxiosResponse } from "axios";

const requestParser = (
    promise: Promise<AxiosResponse<any, any>>,
    setIsLoading?: (isLoading: boolean) => void,
    setData?: (data: any) => void,
    setErrors?: (errors: any) => void,
    callBack?: (data: any) => void
) => {
    setIsLoading?.(true);

    promise
        .then((response) => {
            setData?.(response.data);
            callBack?.(response.data);

            return response;
        })
        .catch((error) => {
            setErrors?.(error.response.data.errors);

            return error;
        })
        .finally(() => setIsLoading?.(false));
};

export default requestParser;
