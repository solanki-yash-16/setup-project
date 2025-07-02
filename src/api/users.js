import axiosInstance from "./axios";

export const getAllUser = async () => {
  return axiosInstance.get("/posts").then((res) => res.data);
};

export const createPost = async (data) => {
  return axiosInstance.post("/posts", data).then((res) => res.data);
};
