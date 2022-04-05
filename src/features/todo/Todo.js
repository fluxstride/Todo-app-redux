import truncate from "./utils/truncate"
import { useContext } from "react";
import context from "./context";
import "./Todo.css"

const Todo = ({ todo }) => {

  const mainState = useContext(context);
  const { setState, state } = mainState

  const editModalShow = (id) => () => {
    setState(prevState => {
      return {
        ...prevState,
        ui: {
          ...prevState.ui,
          editModal: {
            display: true,
            todoId: id
          }
        }
      }
    })

  }
  const removeTodo = (id) => {
    setState(prevState => {
      return {
        ...prevState,
        todos: prevState.todos.filter((todo) => todo.id !== id)
      }
    })
  }
  return (
    <div className="todo__container">
      <div className="todo__text" title={todo.text}>{`${"✔"}  ${truncate(todo.text, 28)}`}</div>

      <div className="todo__modify">
        <div className="todo__edit modify" onClick={editModalShow(todo.id)}>Edit</div>
        <div className="todo__delete  todo__modify__last__child" onClick={() => removeTodo(todo.id)}>X</div>
      </div>

    </div>
  )
}

export default Todo