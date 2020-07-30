import { apiClient } from "../AxiosClient";
import { AxiosError } from "axios";

export const getSchools = async (
  longitude: number,
  latitude: number,
  amount: number
) => {
  try {
    const response = await apiClient.get(
      "school/" + longitude + "/" + latitude + "/" + amount
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

export const getSubjectInfo = async (pid: number) => {
  try {
    const response = await apiClient.get("vigo/" + pid);
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
