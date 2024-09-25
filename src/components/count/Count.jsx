import { useState } from "react";

export const Count = () => {
  //   let value = 0;
  const [value, setValue] = useState(0);
  const increase = () => {
    if (value < 5) setValue((current) => ++current);
  };
  const decrease = () => {
    if (value > 0) setValue((current) => --current);
  };
  return (
    <div>
      <button onClick={increase}>+</button>
      {value}
      <button onClick={decrease}>-</button>
    </div>
  );
};
