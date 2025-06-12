import { apiClient } from "./apiClient";

export const fetchFeaturedRooms = async () => {
  const response = await apiClient.get("/featured");
  return response.data;
};
