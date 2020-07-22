import { apiClient } from "../AxiosClient";
import { AxiosError } from "axios";

export const getMail = async (pid: number) => {
  try {
    const response = await apiClient.get("digipost/" + pid);
    if (response.status !== 404) {
      return response.data;
    }
  } catch (e) {
    if (e && e.response) {
      const axiosError = e as AxiosError;
      return axiosError.response?.data;
    }

    throw e;
  }
};
