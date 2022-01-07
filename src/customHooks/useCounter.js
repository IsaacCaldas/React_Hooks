import React, { useState } from "react";

export const useCounter = (inititalValue = 0) => {

  const [count, setCount] = useState(inititalValue);

  function inc(){
    setCount(count + 1);
  }
  function dec(){
    setCount(count - 1);
  }

  return [count, inc, dec];

};