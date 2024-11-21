import { axiosInstance } from "@/axios";

export const post = (params: {
  name: string;
  description: string;
  permissionIds: string[];
}) => {
  return axiosInstance.post("/roles", params);
};

export const role = {
  post,
};
