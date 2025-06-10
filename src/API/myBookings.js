import { apiClient } from "./apiClient";

export const fetchMyBookingsData = async (email) => {
  const response = await apiClient.get(`/myBookings/?email=${email}`);
  return response.data;
};
