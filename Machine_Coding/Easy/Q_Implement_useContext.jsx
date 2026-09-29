import React, { createContext, useContext, useState } from "react";

//Implement useContext Hook?

const context = createContext();
const Q_Implement_useContext = () => {
  const [itemValue, setItemValue] = useState("Laptop");
  return (
    <context.Provider value={itemValue}>
      <div>
        <h2>useContext Hook:</h2>
        <h4>itemValue: {itemValue}</h4>
        <button onClick={()=>setItemValue("Smart Phone")}>Update Value</button>
        <Comp2/>
      </div>
    </context.Provider>
  );
};
function Comp2() {
  return (
    <>
      <h5>component 2</h5>
      <Comp3 />
    </>
  );
}
function Comp3() {
  return (
    <>
      <h5>component 3</h5>
      <Comp4 />
    </>
  );
}
function Comp4() {
  return (
    <>
      <h5>component 4</h5>
      <Comp5 />
    </>
  );
}
function Comp5() {
    const value=useContext(context)
  return (
    <>
      <h5>component 5</h5>
      <h4>item in comp5: {value}</h4>
    </>
  );
}

export default Q_Implement_useContext;
/*
->React useContext hook:
    React useContext hook is a way to manage state/data globally.
    It can be used together with the useState Hook to share state/data between deeply nested components more easily than with useState alone.

    ->Common Types of Data Used with useContext:
        User Authentication: Managing login status, tokens, or profile data (isLoggedIn, user).
        UI Themes: Switching between light and dark modes or custom branding colors.
        User Preferences: Storing language settings, timezone, or accessibility choices.
        App Services & Functions: Sharing application-wide functions like data fetchers, notification triggers, or routers

    ->The Problem:
        State should be held by the highest parent component in the stack that requires access to the state.
        To illustrate, we have many nested components. 
        The component at the top and bottom of the stack needs access to the state.
        To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".
*/