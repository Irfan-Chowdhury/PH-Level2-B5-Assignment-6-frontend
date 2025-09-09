import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config";

// Send Money
type SendMoneyRequest = {
  receiver_phone: string;
  amount: number;
  pin: string;
};

type SendMoneyResponse = {
  message: string;
  balance?: number; // depends on backend response
};


// Cash In
type WalletCashIn = {
  receiver_phone: string;
  amount: number;
  pin: string;
};

type CashInResponse = {
  message: string;
  balance?: number;
};

// Cash Out
type WalletCashout = {
  user_phone: string;
  amount: number;
  pin: string;
};

type CashOutResponse = {
  message: string;
  balance?: number;
};



export const walletApi = createApi({
  reducerPath: "walletApi", // Redux store এ এই slice এর নাম হবে
  baseQuery: fetchBaseQuery({
    baseUrl:`${config.baseUrl}/api/v1`,
    prepareHeaders: (headers) => {
    // প্রতিটা API call এর আগে headers সেট করবে
      const token = localStorage.getItem("dw_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include", // cookies/credentials send করবে
  }),
  endpoints: (builder) => ({
    // এখানে সব endpoint define হয়

    sendMoney: builder.mutation<SendMoneyResponse, SendMoneyRequest>({
      query: (walletFormData) => ({
        url: "/wallet/send-money",
        method: "POST",
        body: walletFormData,
      }),
    }),

    cashIn: builder.mutation<CashInResponse, WalletCashIn>({
      query: (cashInData) => ({
        url: "/wallet/cash-in",
        method: "POST",
        body: cashInData,
      }),
    }),

    cashOut: builder.mutation<CashOutResponse, WalletCashout>({
      query: (cashOutData) => ({
        url: "/wallet/cash-out",
        method: "POST",
        body: cashOutData,
      }),
    }),
    // depositMoney mutation can also live here
  }),
});

// RTK Query automatically একটা hook বানাবে
export const { useSendMoneyMutation, useCashInMutation, useCashOutMutation } = walletApi;





















/**
createApi = RTK Query service বানানো।

baseQuery = কিভাবে API call হবে সেটা define করে।

endpoints = API routes define করা হয়।

mutation = যেকোনো POST/PATCH/DELETE request।

query = GET request এর জন্য।

Hook auto generate হয় (যেমন useSendMoneyMutation) → আপনি সরাসরি React component এ ইউজ করতে পারেন।
 * 
 */