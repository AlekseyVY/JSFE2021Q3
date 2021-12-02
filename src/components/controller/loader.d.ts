export type Options = {
    apiKey: string;
};

export type TEndpoint = string;

export type TOptions = {
    sources?: string;
};

export type Obj = {
    endpoint: TEndpoint;
    options?: TOptions;
};

export type TCallback = (data?: JSON) => void;

export type TurlOptions = {
    [key: string]: string;
};

export interface ILoader {
    getResp(object: Obj): void;
    errorHandler(res: Response): Response;
    makeUrl(options: TOptions, endpoint: string): string;
    load(method: string, endpoint: string, callback: TCallback): void;
}
