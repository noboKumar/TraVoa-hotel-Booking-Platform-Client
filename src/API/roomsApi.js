import { apiClient } from "./apiClient";

export const fetchRoomData = async () => {
  const response = await apiClient.get("/rooms");
  return response.data;
};
