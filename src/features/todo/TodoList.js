import { useSelector } from "react-redux";
import Todo from "./Todo"
import './TodoList.css'
import NoTodo from './NoTodo';

//import { v4 as uuidv4 } from "uuid";
const TodoList = () => {
  const state = useSelector(state => state);
  const todos = state.todos;

  return (
    <div className="todo__list">
      {!todos.length && <NoTodo />}
      {todos.map(todo =>
        <Todo key={new Date()} todo={todo} />
      )}
    </div>
  );
};

export default TodoList;
