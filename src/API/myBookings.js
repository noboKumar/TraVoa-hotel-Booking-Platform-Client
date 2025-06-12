import { apiClient } from "./apiClient";

export const fetchMyBookingsData = async (email, token) => {
  const response = await apiClient.get(`/myBookings/?email=${email}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
