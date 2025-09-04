import axios from "axios";
import config from "../config";

const rootApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  // baseURL: `${config.baseUrl}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default rootApi;