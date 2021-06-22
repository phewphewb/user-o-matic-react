import { useState, useRef } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const searchTimeOutRef = useRef();
  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (searchTimeOutRef.current) {
      clearTimeout(searchTimeOutRef.current);
    }
    const timer = setTimeout(() => {
      setSearch(value);
    }, 250);
    searchTimeOutRef.current = timer;
  };
  return { search, handleSearchChange };
};
