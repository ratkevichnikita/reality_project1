import { configureStore } from "@reduxjs/toolkit";
import { realityApi } from "./services/realityApi";

export const store = configureStore({
  reducer: {
    [realityApi.reducerPath]: realityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(realityApi.middleware),
});
console.log(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
