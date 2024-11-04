import styles from "./progressBar.module.css";
import { useProgressBar } from "./useProgressBar";

export const ProgressBar = () => {
  const progressBar = useProgressBar();

  return (
    <div
      className={styles.progressBar}
      style={{
        width: progressBar,
      }}
    />
  );
};
