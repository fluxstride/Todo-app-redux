import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from "./features/todo/TodoApp"
import { store } from './app/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}> 
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);

