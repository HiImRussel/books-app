/** React */
import { useEffect, useState } from "react";

/** Helpers */
import requestParser from "../helpers/requestParser";

/** Axios */
import { AxiosResponse } from "axios";

const useResource = (
    promiseFunction: (...args: any) => Promise<AxiosResponse<any, any>>,
    initValue: any,
    requestData: any[],
    deps: any[]
) => {
    /** Setup */
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(initValue);
    const [error, setError] = useState(null);

    /** Lifecycle */
    useEffect(() => {
        requestParser({
            promise: promiseFunction(...requestData),
            setIsLoading,
            onSuccess: (data) => {
                setData(data);
                setError(null);
            },
            onError: setError,
        });
    }, [...deps]);

    return { isLoading, data, error };
};

export default useResource;
