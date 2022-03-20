import EditModal from "./EditModal";
import "./styles.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./TodoApp.css"
import { useSelector } from 'react-redux';

const TodoApp = () => {

  const state = useSelector(state => state)
  const uiShow = state.ui.editModal.display
  return (
    <>
      <div className="todo__app">
        <h1 className="title">Todo App</h1>
        <TodoInput />
        <TodoList />
      </div>
      {uiShow && <EditModal />}</>


  );
};

export default TodoApp;
