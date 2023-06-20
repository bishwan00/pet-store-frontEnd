import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: (condition) => {
        const filter = createFilterQueryString(condition);
        return `/categories${filter}`;
      },
    }),
  }),
});

export const { useGetAllCategoryQuery } = categoryApi;

// Helper function to create the filter query string
const createFilterQueryString = (condition) => {
  const filters = Object.entries(condition)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return filters ? `?${filters}` : "";
};
