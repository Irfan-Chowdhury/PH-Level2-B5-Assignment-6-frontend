// src/redux/dashboardApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config";

export type DashboardData = {
  walletRemainingBalance: string;
  deposit: string;
  withdraw: string;
  sendMoney: string;
};

export type DashboardResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: DashboardData;
};

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.baseUrl}/api/v1`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("dw_token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDashboard: builder.query<DashboardResponse, void>({
      query: () => "/user/dashboard",
    }),
  }),
});

export const { useGetDashboardQuery } = dashboardApi;
