import { apiClient } from "../AxiosClient";
import { AxiosError } from "axios";

export const getTrafficStations = async (
  longitude: number,
  latitude: number,
  amount: number
) => {
  try {
    const response = await apiClient.get(
      "police/" + longitude + "/" + latitude + "/" + amount
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
