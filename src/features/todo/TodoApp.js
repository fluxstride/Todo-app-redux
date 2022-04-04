import EditModal from "./EditModal";
import "./styles.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./TodoApp.css"
import { Provider } from "./context";
import { useState } from 'react';

const TodoApp = () => {

  const stateData = {
    todos: [],
    ui: {
      editModal: {
        display: false
      }
    }
  }


  const [state, setState] = useState(stateData);
  return (
    <Provider value={{ state, setState }}>
      <div className="todo__app">
        <h1 className="title">Todo App</h1>
        <TodoInput />
        <TodoList />
      </div>
      {/* {uiShow && <EditModal />} */}
    </Provider>


  );
};

export default TodoApp;
