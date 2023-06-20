import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const brandApi = createApi({
  reducerPath: "brandApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAllBrands: builder.query({
      query: (condition) => {
        const filter = createFilterQueryString(condition);
        return `/brands${filter}`;
      },
    }),
  }),
});

export const { useGetAllBrandsQuery } = brandApi;

// Helper function to create the filter query string
const createFilterQueryString = (condition) => {
  const filters = Object.entries(condition)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return filters ? `?${filters}` : "";
};
