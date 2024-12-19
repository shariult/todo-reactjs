import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type todoType } from "../types";
import { v4 as uuid } from "uuid";

const initialState: todoType[] = [];

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    create: function (
      prevState,
      action: PayloadAction<{ title: string; details: string }>
    ) {
      prevState.push({
        id: uuid(),
        title: action.payload.title,
        details: action.payload.details,
      });
    },
    delete: function (prevState, action: PayloadAction<{ id: string }>) {
      return prevState.filter((todoItem) => todoItem.id !== action.payload.id);
    },
  },
});
const todoAction = todoSlice.actions;

export default todoSlice;
export { todoAction };
