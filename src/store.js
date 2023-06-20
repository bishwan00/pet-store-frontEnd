import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";
import { api } from "./api/api";
import userSlice from "./api/globalSlices/user.slics";
import { productApi } from "./api/product";
import { brandApi } from "./api/brand";
import { categoryApi } from "./api/category";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [api.reducerPath]: api.reducer,
    user: userSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      productApi.middleware,
      brandApi.middleware,
      categoryApi.middleware
    ),
});
