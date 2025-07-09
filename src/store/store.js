import { createStore } from "redux";

const INITIAL_STATE = { counter: 0 };

const counterReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = createStore(counterReducer);

export default store; // exporting the store to be used later in the app
