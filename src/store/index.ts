import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { useDispatch, useSelector } from "react-redux";
