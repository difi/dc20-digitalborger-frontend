import {apiClient} from "../AxiosClient";
import {AxiosError} from "axios";

export const getSupport = async (pid: number) => {
    try{
        const response = await apiClient.get("laanekassen/" + pid);
        if (response.status !== 404){
            return response.data;
        }

    }catch (e) {
        if (e && e.response){
            const axiosError = e as AxiosError;
            return axiosError.response?.data;
        }

        throw e;
    }
}
export const getPayoutData = async (pid: number) => {
    try{
        const response = await apiClient.get("utbetalinger/" + pid);
        if (response.status !== 404){
            return response.data;
        }

    }catch (e) {
        if (e && e.response){
            const axiosError = e as AxiosError;
            return axiosError.response?.data;
        }

        throw e;
    }
}
