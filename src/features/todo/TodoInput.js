import { useState, useContext } from "react";
import context from "./context";
import { v4 as uuidv4 } from 'uuid';
import "./TodoInput.css"
const TodoInput = () => {

  const mainState = useContext(context);
  const { setState } = mainState


  const [todo, setTodo] = useState({
    id: uuidv4(),
    text: ""
  });

  const onChange = e => {
    setTodo({ ...todo, id: uuidv4(), text: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    setState(prevState => {
      return {
        ...prevState, todos: [...prevState.todos, todo]
      }
    });
    setTodo({ ...todo, text: "" });
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <div className="todo__input__container">
        <input
          type="text"
          className="todo__input"
          placeholder="enter your todo here..."
          onChange={onChange}
          value={todo.text}
          required={true}
        />
        <button className="todo__add__button">Add</button>
      </div>
    </form>
  );
};

export default TodoInput;
