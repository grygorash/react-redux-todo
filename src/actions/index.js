let nextTodoId = new Date();
export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id
  };
};

export const errorTodo = (text) => {
  return {
    type: "ERROR_TODO",
    text
  };
};