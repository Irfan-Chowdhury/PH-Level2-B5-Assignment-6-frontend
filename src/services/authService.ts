
import axios from "axios";
import rootApi from "../redux/rootAPI";
import config from "../config";

export const loginUser = async (credentials: { email: string; password: string }) => {
  // Step 1: get CSRF cookie
  await axios.get(`${config.baseUrl}/sanctum/csrf-cookie`, {
    withCredentials: true,
  });

  // Step 2: login
  const response = await rootApi.post("/auth/login", credentials);
  return response.data;
};


export const logoutUser = async () => {
  
  await axios.get(`${config.baseUrl}/sanctum/csrf-cookie`, {
    withCredentials: true,
  });

  const token = localStorage.getItem("dw_token");
  if (!token) {
    throw new Error("No token found");
  }

  let response = await axios.post(`${config.baseUrl}/api/v1/auth/logout`, {}, {
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${token}`,
      },
  });

  return response.data;
};

