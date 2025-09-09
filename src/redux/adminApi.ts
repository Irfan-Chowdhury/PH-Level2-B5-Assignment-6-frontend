// src/redux/adminApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config";

export type Transaction = {
  id: number;
  type: "cash-in" | "cash-out";
  amount: number;
  status: "success" | "pending" | "completed";
  recipient: { phone: string };
  createdAt: string;
};

type TransactionsResponse = {
  data: Transaction[];
};

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.baseUrl}/api/v1`,
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
    getTransactions: builder.query<Transaction[], void>({
      query: () => "/admin/transactions",
      transformResponse: (response: TransactionsResponse) => response.data,
    }),
  }),
});

export const { useGetTransactionsQuery } = adminApi;
