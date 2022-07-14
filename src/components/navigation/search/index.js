import React, { useEffect, useState, useRef } from "react";
import { SearchBar } from "../style.js";
export default function Search(props) {
  const searchRef = useRef();
  const [focus, setFocus] = useState(props.focus ? true : false);
  const [value, setValue] = useState(
    props.searchValue ? props.searchValue : ""
  );
  const handleUpdate = (search) => {
    setValue(search);
  };
  const debouncedSearch = useDebounce(value);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (focus && searchRef.current && !searchRef.current.contains(e.target)) {
        setFocus(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);
  useEffect(() => {
    props.setSearchValue(debouncedSearch);
  }, [debouncedSearch]);
  return (
    <SearchBar
      ref={searchRef}
      focus={focus}
      value={value}
      onChange={(e) => handleUpdate(e.target.value)}
    />
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
