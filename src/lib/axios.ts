import { env } from "@/env";
import axios from "axios";
import { getAuthToken } from "./auth";

export const api = axios.create({
  baseURL: env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
