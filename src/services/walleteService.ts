import rootApi from "../redux/rootAPI";

export const depositMoney = async (walletFormData: { from: string; amount: number,pin: string }) => {

  const token = localStorage.getItem("dw_token");
  if (!token) {
    throw new Error("No token found");
  }

  const response = await rootApi.patch(`/wallet/add-money`, walletFormData, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};


export const withdrawBalance = async (walletFormData: { to: string; amount: number,pin: string }) => {

  const token = localStorage.getItem("dw_token");
  if (!token) {
    throw new Error("No token found");
  }

  const response = await rootApi.patch(`/wallet/withdraw-money`, walletFormData, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};


export const walletSendMoney = async (walletFormData: { receiver_phone: string; amount: number,pin: string }) => {

  const token = localStorage.getItem("dw_token");
  if (!token) {
    throw new Error("No token found");
  }

  const response = await rootApi.post(`/wallet/send-money`, walletFormData, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
