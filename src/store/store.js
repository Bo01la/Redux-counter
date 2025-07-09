import { createStore } from "redux";

const INITIAL_STATE = { counter: 0, showCounter: true }; // adding new state to state object

const counterReducer = (state = INITIAL_STATE, action) => {
  // we have to add the new state to each action because Redux will not merge the
  // old one with the new one for us
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }
  // we have to add the new state to each action because Redux will not merge the
  // old one with the new one for us

  if (action.type === "add-5") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  // we have to add the new state to each action because Redux will not merge the
  // old one with the new one for us

  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }
  

  // adding the new state but inverted it's value using the (!)
  if (action.type === "toggle") {
    return { showCounter: !state.showCounter, counter: state.counter };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
