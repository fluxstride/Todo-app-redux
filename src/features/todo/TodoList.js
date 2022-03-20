import { useSelector } from "react-redux";
import Todo from "./Todo"
import './TodoList.css'
import NoTodo from './NoTodo';

const TodoList = () => {
  const state = useSelector(state => state);
  const todos = state.todos;

  return (
    <div className="todo__list">
      {!todos.length && <NoTodo />}
      {todos.map(todo =>
        <Todo key={todo.id} todo={todo} />
      )}
    </div>
  );
};

export default TodoList;
