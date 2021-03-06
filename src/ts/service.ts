import { Response, ResponseError } from "superagent";
import { STATUS_CODE_200 } from "./constants";

export const requestSuccess = <T>(res: Response) => {
    if (res.status === STATUS_CODE_200) {
        return res.body as T;
    }
    return null;
};

export const requestError = (err: ResponseError) => {
    throw err;
};

export const objectToQuery = (obj: object & { [key: string]: any }) => {
    const keys = Object.keys(obj);
    const query = keys
        .filter((k) => obj[k] !== undefined)
        .map((k) => {
            const value = obj[k];
            const v = typeof value === "boolean"
                ? +value
                : Array.isArray(value)
                    ? value.join(",")
                    : value;
            return `${k}=${encodeURIComponent(v)}`;
        })
        .join("&");

    return query;
};
