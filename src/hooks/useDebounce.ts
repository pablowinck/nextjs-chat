import { useState, useEffect } from "react";

type Options = {
  value: string;
  delay: number;
};

export default function useDebounce({ value, delay }: Options): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
}
