import { initialState } from "./root-reducer";

export const addTodoItem = (inputvalue) => ({
  type: "addTodos",
  payload: {
    todo: inputvalue,
    id: initialState.todos.length + 1,
  },
});
