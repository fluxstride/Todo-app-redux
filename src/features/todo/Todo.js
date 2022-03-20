import truncate from "./utils/truncate"
import "./Todo.css"
import { useDispatch } from 'react-redux';
import { displayEditModal } from "./uiSlice";
import { removeTodo } from "./todoSlice";

const Todo = ({ todo }) => {

    const dispatch = useDispatch()
    const editModalShow = () => dispatch(displayEditModal(todo.id))
    const removeTodoItem = () => dispatch(removeTodo(todo.id))
    return (
        <div className="todo__container">
            <div className="todo__text" title={todo.text}>{`${"✔"}  ${truncate(todo.text, 28)}`}</div>

            <div className="todo__modify">
                <div className="todo__edit modify" onClick={editModalShow}>Edit</div>
                <div className="todo__delete  todo__modify__last__child" onClick={removeTodoItem}>X</div>
            </div>

        </div>
    )
}

export default Todo