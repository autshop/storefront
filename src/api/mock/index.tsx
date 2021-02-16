import {AxiosInstance, AxiosRequestConfig} from "axios";
import Routes from "../routes";
import {variants} from "./variants";

const createFakeAxiosResponse = (data: any) => ({
    data,
    status: 200,
    statusText: "status",
    headers: {},
    config: {}
});

const mockApi: Partial<AxiosInstance> = {
    get: (url: string) => new Promise<any>((resolve) => {
        switch (url){
            case Routes.VARIANTS_GET:
                resolve(createFakeAxiosResponse(variants));
                break;
            default:
                resolve(createFakeAxiosResponse(null));
        }
    })
}

export default mockApi;