import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import "./TodoInput.css"
const TodoInput = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    text: ""
  });

  const onChange = e => {
    setTodo({ ...todo, text: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(todo));
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
