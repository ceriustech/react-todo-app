import React from "react";

const input = ({ setTodoValue, todo, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      name="todo item"
      placeholder="Type your todo item here..."
      className={""}
      onChange={(event) => {
        let inputValue = event.target.value;
        setTodoValue(inputValue);
      }}
      value={todo}
    ></input>
  </form>
);

export default input;
