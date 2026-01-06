// src/redux/profileApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config";

export type UserProfile = {
  id: number;
  name: string;
  phone: string;
  email: string;
  role: string;
  address: string;
};

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl:`${config.baseUrl}/api/v1`, // adjust your API base URL
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("dw_token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
    credentials: "include", // include cookies if needed
  }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getProfile: builder.query<UserProfile, void>({
      query: () => "/user/profile",
      transformResponse: (response: { data: UserProfile }) => response.data, // ✅ unwrap
      providesTags: ["Profile"],
    }),
    updateProfile: builder.mutation<UserProfile, Partial<UserProfile> & { password?: string; password_confirmation?: string }>({
      query: (body) => ({
        url: "/user/profile",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Profile"], // refresh profile after update
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
