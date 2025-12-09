import { useState, useEffect, useCallback } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  });

  const setLocalStorage = useCallback(
    (newValue) => {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    [key]
  );

  const getLocalStorage = useCallback(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  }, [key, defaultValue]);

  const trigger = useCallback(() => {
    setValue(getLocalStorage());
  }, [getLocalStorage]);

  return { value, setLocalStorage, getLocalStorage, trigger };
};
