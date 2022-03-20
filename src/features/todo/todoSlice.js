import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state.splice(index, 1)
    },
    editTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state[index].text && (state[index].text = action.payload.text);
    }
  }
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
const reducer = todoSlice.reducer;
export default reducer;
