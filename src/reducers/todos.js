const todo = (state, action) => {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false,
        createTime: date.toLocaleString("en-US", options)
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    case "DELETE_TODO":
      return action.id;

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        todo(undefined, action)
      ];
    case "TOGGLE_TODO":
      return state.map(t =>
        todo(t, action)
      );
    case "DELETE_TODO":
      return state.filter(t => {
          if (t.id !== todo(undefined, action)) {
            return t;
          }
          return null;
        }
      );
    default:
      return state;
  }
};

export default todos;
