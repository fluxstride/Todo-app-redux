import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import uiSlice from "../features/todo/uiSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    ui: uiSlice
  }
});
