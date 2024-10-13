import { useEffect, useState } from "react";

const getNewPercent = () => {
  return (
    Math.floor(
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
        100
    ) + "%"
  );
};

export const useProgressBar = () => {
  const [progress, setProgress] = useState("0%");

  useEffect(() => {
    const onScroll = () => setProgress(getNewPercent());

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return progress;
};
