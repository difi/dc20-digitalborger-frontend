import {apiClient} from "../AxiosClient";
import {AxiosError} from "axios";



export const getDoctorData = async (pid: number) => {
    try{
        const response = await apiClient.get("fastlege/" + pid);
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

export const getPrescriptionInfo = async (pid: number) => {
    try{
        const response = await apiClient.get("resepter/" + pid);
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

export const getAppointmentData = async (pid: number) => {
    try{
        const response = await apiClient.get("legetimer/" + pid);
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
export const getVaccineData = async (pid: number) => {
    try{
        const response = await apiClient.get("vaksiner/" + pid);
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

