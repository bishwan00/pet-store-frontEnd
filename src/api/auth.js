import { api } from "./api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "/users/signup",
        method: "POST",
        body: body,
      }),
    }),
    getCurrentUser: builder.query({
      query: () => "/users/currentuser",
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/users/login",
        method: "POST",
        body: body,
      }),
    }),
    order: builder.mutation({
      query: (body, id) => {
        console.log(id); // Log the ID being sent to the order mutation
        return {
          url: `/orders/${id}`,
          method: "POST",
          body: body,
        };
      },
    }),
  }),
});

export const {
  useSignupMutation,
  useGetCurrentUserQuery,
  useLoginMutation,
  useOrderMutation,
} = authApi;
