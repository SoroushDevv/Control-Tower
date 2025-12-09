import { useState, useCallback } from "react";

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback((step = 1) => setCount(c => c + step), []);
  const decrement = useCallback((step = 1) => setCount(c => c - step), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return { count, increment, decrement, reset, setCount };
};
