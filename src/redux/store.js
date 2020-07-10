import { createStore } from "redux";

import ToDoReducer from "./root-reducer";

const store = createStore(ToDoReducer);

export default store;
