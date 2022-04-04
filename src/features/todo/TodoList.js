
import Todo from "./Todo"
import './TodoList.css'
import NoTodo from './NoTodo';
import { useContext } from 'react';
import context from "./context";
import EditModal from "./EditModal";


const TodoList = () => {
  const mainState = useContext(context)
  const { state } = mainState

  const todos = state.todos
  const uiShow = state.ui.editModal.display
  return (
    <div className="todo__list">
      {!todos.length && <NoTodo />}
      {todos.map(todo =>
        <Todo key={todo.id} todo={todo} />
      )}

      {uiShow && <EditModal />}
    </div>
  );
};

export default TodoList;
