import { useEffect, useState } from "react";

const PREFIX = "webchat-";

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    let jsonValue = "";
    if (localStorage.getItem(prefixedKey)) {
      jsonValue = localStorage.getItem(prefixedKey);
    }
    if (jsonValue) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
