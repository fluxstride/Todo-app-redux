import { useState, useContext } from "react";
import context from "./context";
import "./EditModal.css"


const EditModal = () => {
  const mainState = useContext(context);
  const { state, setState } = mainState;

  const todoId = state.ui.editModal.todoId;
  const todos = state.todos
  const todoItem = state.todos.findIndex(todo => todo.id === todoId);
  const currentTodo = todos[todoItem]
  const [text, setText] = useState(currentTodo.text);

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const editTodo = () => {
    setState(prevState => {
      return {
        ...prevState,
        todos: prevState.todos.map(todo => {
          if (todo.id === todoId) {
            return {
              ...todo,
              text
            }
          }
          return todo
        })
      }
    })

  }
  const hideEditModal = () => {
    setState(prevState => {
      return {
        ...prevState,
        ui: {
          ...prevState.ui,
          editModal: {
            display: false,
            todoId: null
          }
        }
      }
    })

  }

  const removeTodo = (id) => () => {
    setState(prevState => {
      return {
        ...prevState,
        todos: prevState.todos.filter(todo => todo.id !== currentTodo.id)
      }
    })
  }

  return (
    <div >
      <div className="backdrop" onClick={() => hideEditModal()} ></div>
      <div className="editModal__container">
        <div className="input__container">
          <div className="inner__input__container">
            <input type="text" value={text} className="modify__Input" onChange={handleChange} />
            <button
              onClick={() => {
                if (text.length) {
                  editTodo(currentTodo.id)
                } else {
                  removeTodo(currentTodo.id)
                }
                hideEditModal()
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
