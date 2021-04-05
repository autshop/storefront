import axios, { AxiosInstance } from "axios";

const serverApi: AxiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api`,
    withCredentials: false
});

export default serverApi;
