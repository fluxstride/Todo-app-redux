import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoApp from "./features/todo/TodoApp"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <TodoApp />
  </>,

);

