import styles from "./progressBar.module.css";
import classNames from "classnames";
import { useProgressBar } from "./useProgressBar";

export const ProgressBar = () => {
  const progressBar = useProgressBar();

  return (
    <div className={classNames(styles.progressBar)}
      style={{
        width: progressBar,

      }}
    />
  );
};
