import { Response, ResponseError } from "superagent";
export declare const requestSuccess: <T>(res: Response) => T | null;
export declare const requestError: (err: ResponseError) => never;
export declare const objectToQuery: (obj: object & {
    [key: string]: any;
}) => string;
