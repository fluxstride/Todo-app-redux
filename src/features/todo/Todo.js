import "./styles.css"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeTodo, addTodo } from "./todoSlice"
import { v4 as uuidv4 } from "uuid"


const TodoList = () => {
	const state = useSelector(state => state)
	const todos = state.todos
	const dispatch = useDispatch()

	return (
		<div className="todos">
			{
				todos.map(todo =>
					<p className="todo__item" onClick={() => {
						dispatch(removeTodo(todo))
					}} key={todo.id}>{todo.text}</p>
				)
			}
		</div>
	)
}

const TodoEditModal = () => {
	const dispatch = useDispatch()

	const [todo, setTodo] = useState({
		id: uuidv4(),
		text: ""
	})

	const onChange = (e) => {
		setTodo({ ...todo, id: uuidv4(), text: e.target.value })
	}
	return (
		<div className="todo__input__container">
			<input type="text" className="todo__input" placeholder="enter your todo here" onChange={onChange} value={todo.text} />
			<button className="todo__add__button" onClick={() => {
				dispatch(addTodo(todo))
				setTodo({ ...todo, id: uuidv4(), text: "" })
			}
			}>Add</button>
		</div>
	)
}

const Todo = () => {
	const dispatch = useDispatch()

	const [todo, setTodo] = useState({
		id: uuidv4(),
		text: ""
	})

	const onChange = (e) => {
		setTodo({ ...todo, id: uuidv4(), text: e.target.value })
	}


	return (
		<div className="todo">
			<div className="todo__input__container">
				<input type="text" className="todo__input" placeholder="enter your todo here" onChange={onChange} value={todo.text} />
				<button className="todo__add__button" onClick={() => {
					dispatch(addTodo(todo))
					setTodo({ ...todo, id: uuidv4(), text: "" })
				}
				}>Add</button>
			</div>
			<TodoList />
			<TodoEditModal/>

		</div>
	)
}

export default Todo;