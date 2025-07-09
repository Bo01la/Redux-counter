import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { counterSliceActions } from "../store/store"; // imported our slice actions

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // using the methods we created in slice in the store
    dispatch(counterSliceActions.increase());
  };
  const decrementHandler = () => {
    dispatch(counterSliceActions.decrease);
  };

  const addFiveHandler = () => {
    // here we pass the value (number, string, object, array, etc) to the function
    // as a payload. Thus, when we access it in the "Slice methods" we use ".payload"
    // because when redux toolkit creates an action for us, it creates it as an object with these
    // default properties {type: "a uniue identifier, payload: (values we add of any type)"}
    dispatch(counterSliceActions.addFive(5));

    // it can also be like this if we have multiple values to add:
    // dispatch(counter.addFive({value1: 1, value2: 2, value3: 3}))
  };

  const toggleCounterHandler = () => {
    dispatch(counterSliceActions.showCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>+1</button>
        <button onClick={addFiveHandler}>+5</button>
        <button onClick={decrementHandler}>-1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
