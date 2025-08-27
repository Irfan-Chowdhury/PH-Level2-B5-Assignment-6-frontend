
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

  // Step 2: Logout request
  const response = await rootApi.post("/auth/logout", null, {
    withCredentials: true,
  });


  return response.data;
};

