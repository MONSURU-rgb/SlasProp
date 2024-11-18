import { axiosInstance } from "@/axios";
import { ProfileData } from "./types/profile";

export const login = (params: {
  username: string;
  password: string;
  type: string;
}) => {
  return axiosInstance
    .post<{
      message: string;
      data: {
        access_token: string;
        name: string;
        username: string;
        role: {
          name: string;
          id: number;
          permissions: any[];
        };
      };
    }>("/auth/login", params)
    .then(({ data }) => data);
};

export const register = (params: {
  email: string;
  password: string;
  name: string;
}) => {
  return axiosInstance.post("/auth/register", params);
};

export const profile = () => {
  return axiosInstance.get<{ data: ProfileData }>("/account/profile");
};

export const user = {
  login,
  register,
  profile,
};
