import { configureStore } from "@reduxjs/toolkit";
import cardListSlice from "../slice/cardSlice";
import App from "../App";

export const store = configureStore({
  reducer: {
    cardList: cardListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;