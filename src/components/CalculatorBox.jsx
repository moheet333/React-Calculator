import React, { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

function CalculatorBox() {
  var [value, setValue] = useState("");

  function showInput(input) {
    setValue((prevValue) => {
      return [...prevValue, input];
    });
  }

  return (
    <div className="box">
      <Display displayInput={value}/>
      <Keypad onInput={showInput} />
    </div>
  );
}

export default CalculatorBox;
