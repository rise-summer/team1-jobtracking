import React, { useEffect, useState } from "react";
import { SearchBar } from "../style.js";
export default function Search(props) {
  const [value, setValue] = useState(
    props.searchValue ? props.searchValue : ""
  );
  const handleUpdate = (search) => {
    setValue(search);
  };
  const debouncedSearch = useDebounce(value);
  useEffect(() => {
    props.setSearchValue(debouncedSearch);
  }, [debouncedSearch]);
  return (
    <SearchBar value={value} onChange={(e) => handleUpdate(e.target.value)} />
  );
}

function useDebounce(notes, delay = 500) {
  const [debounced, setDebounced] = useState(notes);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(notes), delay);
    return () => clearTimeout(timer);
  }, [notes, delay]);
  return debounced;
}
