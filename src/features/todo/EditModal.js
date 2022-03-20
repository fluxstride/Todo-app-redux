import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { displayEditModal } from "./uiSlice";
import { editTodo, removeTodo } from "./todoSlice";
import "./EditModal.css"


const EditModal = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const todoId = state.ui.editModal.todoId;
  const todos = state.todos
  const todoItem = state.todos.findIndex(todo => todo.id === todoId);
  const todo = todos[todoItem]
  const [text, setText] = useState(todo.text);

  const handleChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div >
      <div className="backdrop" onClick={() => dispatch(displayEditModal())} ></div>
      <div className="editModal__container">
        <div className="input__container">
          <div className="inner__input__container">
            <input type="text" value={text} className="modify__Input" onChange={handleChange} />
            <button
              onClick={() => {
                if (text.length) {
                  dispatch(editTodo({ id: todo.id, text: text }))
                } else {
                  dispatch(removeTodo(todo.id))
                }
                dispatch(displayEditModal())
              }}
              className="modify__button"
            >
              Modify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
