import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValues, setStoredValues] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const saveItems = items => {
    setStoredValues(items);
    localStorage.setItem(key, JSON.stringify(items));
  };

  return [storedValues, saveItems];
};

export default useLocalStorage;
