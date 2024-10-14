import { useState } from "react";

export const useCounter = () => {
    const [value, setValue] = useState(0);
    const increment= () => {
        if (value < 5) setValue((current) => ++current);
    };
    const decrement = () => {
        if (value > 0) setValue((current) => --current);
    };
    return {
        value,
        increment,
        decrement,
    };
};