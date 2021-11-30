import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid"


const initialState = [{
  id: uuidv4(), text: "Wake Up"
}]


const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)

    },
    removeTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(index, 1);
    },
    editTodo: (state, action) => {
      return state
    }
  }
})

export const { addTodo, removeTodo } = todoSlice.actions
const reducer = todoSlice.reducer
export default reducer