import { useEffect, useRef } from "react";

export default function usePrevious(value) {

  // useRef stores a value between renders
  // without causing the component to re-render.
  const ref = useRef();

  useEffect(() => {
    // After the component renders, store the current value inside ref.
    // This value will become the "previous value" on the next render.
    ref.current = value;

  }, [value]); // Run whenever value changes

  // This runs BEFORE the useEffect above,
  // so ref.current still contains the value
  // from the previous render.
  return ref.current;
}

//Main logic:
/*
Render 1: value = 10
return ref.current → undefined
useEffect → ref.current = 10

Render 2: value = 20
return ref.current → 10 ✅
useEffect → ref.current = 20

Render 3: value = 30
return ref.current → 20 ✅
useEffect → ref.current = 30
*/