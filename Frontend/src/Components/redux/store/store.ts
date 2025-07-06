import { configureStore } from "@reduxjs/toolkit";
import starFeatures from "../features";
export const store = configureStore({
  reducer: {
    user: starFeatures,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
