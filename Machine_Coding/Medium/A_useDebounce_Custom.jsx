import React, { useEffect, useState } from "react";

//Question: Implement a useDebounce hook in React?
const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setdebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setdebouncedValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
};

//usage here:
const A_Debounce = () => {
  const [search, setsearch] = useState("");
  const debouncedSearch=useDebounce(search,1000)
  // console.log("debouncedSearch:",debouncedSearch)
  useEffect(() => {
    if(!debouncedSearch) return
    console.log("API call:")
  }, [debouncedSearch]);
  return (
    <div>
      <h2>Implement useDebounce custom hook</h2>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
    </div>
  );
};
/*
-> How it works:
      User Types
          │
          ▼
      Updates State Immediately
          │
          ▼
      Wait 500ms
          │
          ├── User keeps typing?
          │       │
          │       └── Reset timer
          │
          ▼
      No typing for 500ms
          │
          ▼
      Update debouncedValue
          │
          ▼
      Make API Call / Function call

*/

export default A_Debounce;
