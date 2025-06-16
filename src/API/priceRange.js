import { apiClient } from "./apiClient";

export const fetchPriceRangeRooms = async (minPrice, maxPrice) => {
  const response = await apiClient.get(
    `/rooms?minPrice=${minPrice}&maxPrice=${maxPrice}`
  );
  return response.data;
};