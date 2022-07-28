import React, { useEffect, useState } from "react";
const useDebounce = (notes, delay = 500) => {
  const [debounced, setDebounced] = useState(notes);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(notes), delay);
    return () => clearTimeout(timer);
  }, [notes, delay]);
  return debounced;
};

export default useDebounce;
