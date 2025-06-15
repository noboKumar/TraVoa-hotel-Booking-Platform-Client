import { apiClient } from "./apiClient";

export const fetchLatestReview = async () => {
  const response = await apiClient.get("/allReview");
  return response.data;
};
