import "./styles.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./TodoApp.css"
import { Provider } from "./context";
import { useState } from 'react';
import { useEffect } from "react";


const TodoApp = () => {

  const stateData = {
    todos: [],
    ui: {
      editModal: {
        display: false,
        todoId: null
      }
    }
  }


  const [state, setState] = useState(stateData);

  /*useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);*/
  return (
    <Provider value={{ state, setState }}>
      <div className="todo__app">
        <h1 className="title">Todo App</h1>
        <TodoInput />
        <TodoList />
      </div>
    </Provider>


  );
};

export default TodoApp;
