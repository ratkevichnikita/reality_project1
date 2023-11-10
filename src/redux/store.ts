import { configureStore } from "@reduxjs/toolkit";
import { realityApi } from "./realityApi";

export const store = configureStore({
  reducer: {
    [realityApi.reducerPath]: realityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(realityApi.middleware),
});
