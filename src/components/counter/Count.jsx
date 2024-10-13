import { useState } from "react";

export const Count1 = () => {
  const [value, setValue] = useState(0);
  const increase = () => {
    if (value < 5) setValue((current) => ++current);
  };
  const decrease = () => {
    if (value > 0) setValue((current) => --current);
  };
  return (
    <div>
      <button type="button" onClick={increase}>
        +
      </button>
      {value}
      <button type="button" onClick={decrease}>
        -
      </button>
    </div>
  );
};
