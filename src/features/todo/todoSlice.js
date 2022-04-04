import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const savedState = localStorage.getItem('state') !== null ? localStorage.getItem('state') : '[]';
const initialState = JSON.parse(savedState);
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        text: action.payload.text
      }
      state.push(newTodo);
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
