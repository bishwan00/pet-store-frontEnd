import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (condition) => {
        const filter = createFilterQueryString(condition);
        return `/products${filter}`;
      },
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;

// Helper function to create the filter query string
const createFilterQueryString = (condition) => {
  const filters = Object.entries(condition)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return filters ? `?${filters}` : "";
};
