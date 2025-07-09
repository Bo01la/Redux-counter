import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  //useDispatch() hook returns a function that we can call later to
  // dispatch actions to the reducer function
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // using the above dispatch
    // it accept an array with a (type) property with value = identifiers in the
    // reducer function

    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    // using the above dispatch
    // it accept an array with a (type) property with value = identifiers in the
    // reducer function

    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>+1</button>
        <button onClick={decrementHandler}>-1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
