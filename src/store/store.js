// importing "createslice()" to split our state into multiple slices
// importing "configureStore" so that if we have multiple slices each has its own
// reducers, we can pass them all to the store [cause the store wants just one big reducer]

import { createSlice, configureStore } from "@reduxjs/toolkit";

const INITIAL_STATE = { counter: 0, showCounter: true };

// NOTE: we can make more than 1 slice as needed (ex: counter slice, user slice, .. etc)
// we create a slice that include all states related to each other using
// createSlice() which takes an object as an argumnt with the below properties:
// 1- name: the name of the slice (can be any name)
// 2-initialState: which include the initial values of the state slice (same as we did in normal redux)
// 3- reduces: an object (map) with dispatch function in form of methods

// then we pass the returned value of "createSlice()" to our store created by "createStore()"

const counterSlice = createSlice({
  // 1- name:the name of the slice (can be any name)
  name: "counterState",
  // 2-initialState: which include the initial values of the state slice (same as we did in normal redux)
  initialState: INITIAL_STATE,
  // 3- reduces: an object (map) with dispatch function in form of methods
  reducers: {
    increase(state) {
      // can mutate the state directly because reduxToolkit creates a copy under the hood
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    // we can also use action argument when needed same as we did in the normal reducer function
    addFive(state, action) {
      state.counter = state.counter + action.payload;
    },
    showCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//passing the returned value of "createSlice()" to our store created by "configureStore()"
// configureStore() takes an object as an argument and that object must have
// "reducer" property
// if we have one slice, then we can directly add the slice.reducer to the "reducer property"
// if we have more than 1 slice, we can add an object with (key: value) pairs of each slice and
// its reducers to the "reducer property"
const store = configureStore({
  reducer: counterSlice.reducer,

  // if multiple slices it will be like this:
  //  reducer: {
  //   counter: counterSlice.reducer,
  //   users: usersSlice.reducer,
  //   someSlice: someSlice.reducer
  // }
});

// redux toolkit creates a propert for us called "actions" which includes all
// the method we created for our slice
// in order to dispatch actions, we need to export the "sliceName.actions" to use it
// later in our components
export const counterSliceActions = counterSlice.actions;
export default store;
