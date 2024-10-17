import styles from "./counter.module.css";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div className={styles.counter}>
      <button onClick={increment}>+</button>
      {value}
      <button onClick={decrement}>-</button>
    </div>
  );
};
