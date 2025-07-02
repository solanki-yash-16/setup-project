import axios from "axios";

console.log("first", import.meta.env.VITE_API_URL);
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
});

export default axiosInstance;
