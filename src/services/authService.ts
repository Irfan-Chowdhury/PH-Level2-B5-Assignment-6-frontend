// import rootApi from "../redux/rootAPI";

// export const loginUser = async (credentials: { email: string; password: string }) => {
//   const response = await rootApi.post("/auth/login", credentials);
//   return response.data;
// };


import axios from "axios";
import rootApi from "../redux/rootAPI";
import config from "../config";

// ✅ Adjust depending on your Laravel backend URL
// const BASE_URL = "http://127.0.0.1:8000";

// export const loginUser = async (credentials: { email: string; password: string }) => {
//   // Step 1: Get CSRF cookie
//   await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, { withCredentials: true });

//   // Step 2: Login request
//   const response = await rootApi.post("/auth/login", credentials, {
//     withCredentials: true, // ✅ important for Sanctum
//   });

//   return response.data;
// };


export const loginUser = async (credentials: { email: string; password: string }) => {
  // Step 1: get CSRF cookie
  await axios.get(`${config.baseUrl}/sanctum/csrf-cookie`, {
    withCredentials: true,
  });

  // Step 2: login
  const response = await rootApi.post("/auth/login", credentials);
  return response.data;
};

