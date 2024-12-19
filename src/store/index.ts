import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice.ts";

const store = configureStore({
  reducer: {
    todoState: todoSlice.reducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
