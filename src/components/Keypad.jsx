import React from "react";

function Keypad(props) {

  function handleClick(value) {
    props.onInput(value);
  }

  return (
    <div className="grid-container">
      <div className="grid-item acButton" onClick={() => handleClick("AC")}>AC</div>
      <div className="grid-item deleteButton" onClick={() => handleClick("delete")}>
        <i className="fa-solid fa-delete-left"></i>
      </div>
      <div className="grid-item divideButton"  onClick={() => handleClick("/")}>/</div>
      <div className="grid-item" onClick={() => handleClick(1)}>
        1
      </div>
      <div className="grid-item" onClick={() => handleClick(2)}>
        2
      </div>
      <div className="grid-item"  onClick={() => handleClick(3)}>
        3
      </div>
      <div className="grid-item multiplyButton" onClick={() => handleClick("*")}>*</div>
      <div className="grid-item"  onClick={() => handleClick(4)}>
        4
      </div>
      <div className="grid-item"  onClick={() => handleClick(5)}>
        5
      </div>
      <div className="grid-item"  onClick={() => handleClick(6)}>
        6
      </div>
      <div className="grid-item addButton" onClick={() => handleClick("+")}>+</div>
      <div className="grid-item"  onClick={() => handleClick(7)}>
        7
      </div>
      <div className="grid-item"  onClick={() => handleClick(8)}>
        8
      </div>
      <div className="grid-item"  onClick={() => handleClick(9)}>
        9
      </div>
      <div className="grid-item substractButton" onClick={() => handleClick("-")}>-</div>
      <div className="grid-item pointButton" onClick={() => handleClick(".")}>.</div>
      <div className="grid-item"  onClick={() => handleClick(0)}>
        0
      </div>
      <div className="grid-item equalButton" onClick={() => handleClick("=")}>=</div>
    </div>
  );
}

export default Keypad;
