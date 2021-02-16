import axios, { AxiosInstance } from "axios";
import mockApi from "./mock";

const serverApi: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    withCredentials: true
});


const api = !process.env.NEXT_PUBLIC_USE_MOCK_API ? serverApi : mockApi;

export default api;