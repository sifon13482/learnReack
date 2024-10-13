import { useProgressBar } from "./useProgressBar";
export const ProgressBar = () => {
  const progressBar = useProgressBar();

  return (
    <div
      style={{
        width: progressBar,
        position: "fixed",
        top: 0,
        left: 0,
        height: "10px",
        backgroundColor: "red",
      }}
    />
  );
};
