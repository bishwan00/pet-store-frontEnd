import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";
import { countriesApi } from "./redux/services/countriesApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});
