export const initialState = {
  todos: [
    { todo: "clean room", id: 1 },
    { todo: "do homework", id: 2 },
    { todo: "exercise", id: 3 },
  ],
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTodos":
      console.log(action);
      return [...state.todos, action.payload];

    case "deleteTodos":
      return state.todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default toDoReducer;
