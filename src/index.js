import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from "./features/todo/Todo"
import { store } from './app/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root')
);

