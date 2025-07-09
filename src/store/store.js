import { createSlice, configureStore } from "@reduxjs/toolkit";

const INITIAL_STATE = { counter: 0, showCounter: true };

// 1st state slice (related to counter)
const counterSlice = createSlice({
  name: "counterState",
  initialState: INITIAL_STATE,
  reducers: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    addFive(state, action) {
      state.counter = state.counter + action.payload;
    },
    showCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// creating 2nd state slice (for user Authentication)

const INITIAL_AUTH_STATE = { isLoggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_AUTH_STATE,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

// adding multiple reducers (counter reducers + auth reducers)
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// exporting auth actions
export const authSliceActions = authSlice.actions;
export const counterSliceActions = counterSlice.actions;
export default store;
