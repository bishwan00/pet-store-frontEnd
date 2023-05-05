import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";
import { api } from "./api/api";
import userSlice from "./api/globalSlices/user.slics";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [api.reducerPath]: api.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
