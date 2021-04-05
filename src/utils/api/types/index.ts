import { AxiosResponse } from "axios";

export type ApiResponse<T> = {
    code: number;
    message?: string;
    data?: T;
    error?: string;
};

export type CustomAxiosResponse<T> = AxiosResponse<ApiResponse<T>>;
