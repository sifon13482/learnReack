import styles from "./counter.module.css";

export const Counter = ({ value, increment, decrement }) => {
  
  return (
    <div>
      <button className={styles.button} onClick={increment}>+</button>
      {value}
      <button className={styles.button} onClick={decrement}>-</button>
    </div>
  );
};
