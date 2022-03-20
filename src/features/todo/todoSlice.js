import { createSlice } from "@reduxjs/toolkit";

const savedState = localStorage.getItem('state') !== null ? localStorage.getItem('state') : '[]';
const initialState = JSON.parse(savedState);
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('state', JSON.stringify(state))
    },
    removeTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id)
      state.splice(index, 1)
      localStorage.setItem('state', JSON.stringify(state))
    },
    editTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id)
      state[index].text && (state[index].text = action.payload.text)
      localStorage.setItem('state', JSON.stringify(state))
    }
  }
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
const reducer = todoSlice.reducer;
export default reducer;
