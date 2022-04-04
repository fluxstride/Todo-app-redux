import truncate from "./utils/truncate"
import { useContext } from "react";
import context from "./context";
import "./Todo.css"

const Todo = ({ todo }) => {

    const mainState = useContext(context);
    const { setState, state } = mainState


    const editModalShow = () => { }
    const removeTodoItem = (id) => () => {
        const newTodos = state.todos.filter(todo => todo.id !== id)

        setState(prevState => {
            return {
                ...prevState,
                todos: newTodos
            }
        })
    }
    return (
        <div className="todo__container">
            <div className="todo__text" title={todo.text}>{`${"✔"}  ${truncate(todo.text, 28)}`}</div>

            <div className="todo__modify">
                <div className="todo__edit modify" onClick={editModalShow}>Edit</div>
                <div className="todo__delete  todo__modify__last__child" onClick={removeTodoItem(todo.id)}>X</div>
            </div>

        </div>
    )
}

export default Todo