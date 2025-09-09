// src/redux/dashboardApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config";

export type userDashboardData = {
  walletRemainingBalance: string;
  deposit: string;
  withdraw: string;
  sendMoney: string;
};

export type agentDashboardData = {
  walletRemainingBalance: number;
  cashIn: number;
  cashOut: number;
};

export type DashboardResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: userDashboardData | agentDashboardData;
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
    getUserDashboard: builder.query<DashboardResponse, void>({
      query: () => "/user/dashboard",
    }),
    getAgentDashboard: builder.query<DashboardResponse, void>({
      query: () => "/agent/dashboard",
    }),
  }),
});

export const { useGetUserDashboardQuery, useGetAgentDashboardQuery } = dashboardApi;
