import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  editModal: {
    display: false,
    todoId: ""
  }
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    displayEditModal: (state, action) => {
      state.editModal.display = !state.editModal.display;
      state.editModal.todoId = action.payload;
    }
  }
});

export const { displayEditModal } = uiSlice.actions;

export default uiSlice.reducer;
