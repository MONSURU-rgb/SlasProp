import { localService } from "@/services/local-service";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL || "http://46.101.149.167:5001/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localService.getItem<string>("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
