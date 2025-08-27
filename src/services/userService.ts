import rootApi from "../redux/rootAPI";


export const registerUser = async (userInfo: {
  name: string;
  email: string;
  role: string;
  phone: string;
  address: string;
  password: string;
  password_confirmation: string;
}) => {
  const response = await rootApi.post("/user/register", userInfo);
  return response.data;
};
