import classNames from "classnames";
import styles from "./counter.module.css";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div className={classNames(styles.counter)}>
      <button onClick={increment}>+</button>
      {value}
      <button onClick={decrement}>-</button>
    </div>
  );
};
