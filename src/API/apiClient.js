import axios from "axios";

export const apiClient = axios.create({
  // baseURL: "https://ph-assignment-11-server-ebon.vercel.app",
  baseURL: "http://localhost:3000/",
});
