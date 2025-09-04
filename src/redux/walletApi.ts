import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config";

type SendMoneyRequest = {
  receiver_phone: string;
  amount: number;
  pin: string;
};

type SendMoneyResponse = {
  message: string;
  balance?: number; // depends on backend response
};

export const walletApi = createApi({
  reducerPath: "walletApi",
  baseQuery: fetchBaseQuery({
    baseUrl:`${config.baseUrl}/api/v1`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("dw_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    sendMoney: builder.mutation<SendMoneyResponse, SendMoneyRequest>({
      query: (walletFormData) => ({
        url: "/wallet/send-money",
        method: "POST",
        body: walletFormData,
      }),
    }),
    // depositMoney mutation can also live here
  }),
});

export const { useSendMoneyMutation } = walletApi;
