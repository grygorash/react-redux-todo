import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
// import errorTodo from "./errorTodo";

const todoApp = combineReducers({
  todos,
  // errorTodo,
  visibilityFilter
});

export default todoApp;
