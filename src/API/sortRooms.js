import { apiClient } from "./apiClient";

export const fetchRoomsSort = async (sort) => {
  const response = await apiClient.get(`/rooms?sort=${sort}`);
  return response.data;
};
