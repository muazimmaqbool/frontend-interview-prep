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
