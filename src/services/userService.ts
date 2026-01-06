import rootApi from "../redux/rootAPI";
import axios from "axios";
import config from "../config";

export const registerUser = async (userInfo: {
  name: string;
  email: string;
  role: string;
  phone: string;
  address: string;
  password: string;
  password_confirmation: string;
}) => {
  
  await axios.get(`${config.baseUrl}/sanctum/csrf-cookie`, {
    withCredentials: true,
  });

  const response = await rootApi.post("/user/register", userInfo);
  return response.data;
};


export const toggleUserOrAgentStatus = async (id: number) => {
  // const response = await rootApi.patch(`/user/${id}/status`);

  // return response.data.data; // return updated user


  const token = localStorage.getItem("dw_token");
  if (!token) {
    throw new Error("No token found");
  }

  const response = await rootApi.patch(`/user/${id}/status`, {}, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};
