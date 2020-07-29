import { apiClient } from "../AxiosClient";
import { AxiosError } from "axios";

export const sendToken = async (pid: number, token: string) => {
  try {
    const response = await apiClient.get(
      "pushnotifications/create/" + pid + "/" + token
    );

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

export const updateBagde = async (token: string) => {
  try {
    const response = await apiClient.get("pushnotifications/update/" + token);

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
