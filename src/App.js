import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import Input from "./components/input";
import { addTodoItem } from "./redux/actions";
import input from "./components/input";

function App(props) {
  console.log(props);
  const [todoValue, setTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    props.addTodos(todoValue);
  };

  return (
    <div className="App">
      <Input
        todo={todoValue}
        setTodoValue={setTodoValue}
        onSubmit={onSubmit}
      ></Input>
      <ul>
        {props.todos.map((item) => {
          return (
            <li key={item.id}>
              {item.id} {item.todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: (inputValue) => {
      console.log(inputValue);
      dispatch(addTodoItem(inputValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
