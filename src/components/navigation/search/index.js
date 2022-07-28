import React, { useEffect, useState, useRef } from "react";
import useDebounce from "../../../hooks/useDebounce";
import glass from "../../../images/magnifying_glass.svg";
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
      image={glass}
      ref={searchRef}
      focus={focus}
      value={value}
      onChange={(e) => handleUpdate(e.target.value)}
    />
  );
}
