import React from "react";

function Display(props) {
  var inputArray = props.displayInput;
  var firstNum, secondNum, key, firstPoint, secondPoint, pointKey, ans;
  var Num = 0;
  for (var i = 0; i < inputArray.length; i++) {
    Num = Num * 10 + inputArray[i];
  }
  switch (inputArray[inputArray.length - 1]) {
    case "=":
      window.localStorage.removeItem("pointKey");
      firstPoint = localStorage.getItem("decimalPlaceFirst");
      secondPoint = localStorage.getItem("decimalPlaceSecond");
      firstPoint = parseInt(firstPoint);
      secondPoint = parseInt(secondPoint);
      var temp = firstPoint;
      firstPoint = secondPoint;
      secondPoint = temp;
      secondNum = Num.toString();
      localStorage.setItem("secondNumber", secondNum);
      secondNum = localStorage.getItem("secondNumber");
      secondNum = parseFloat(secondNum);
      secondNum = secondNum / 10;
      secondNum = secondNum.toString();
      secondNum = secondNum.replace(secondNum[secondPoint - 1], ".");
      firstNum = localStorage.getItem("firstNumber");
      firstNum = parseFloat(firstNum);
      firstNum = firstNum / 10;
      firstNum = firstNum.toString();
      firstNum = firstNum.replace(firstNum[firstPoint - 1], ".");
      inputArray.length = 0;
      window.localStorage.removeItem("decimalPlaceFirst");
      window.localStorage.removeItem("decimalPlaceSecond");
      break;
    case ".":
      console.log(localStorage.getItem("pointKey"));
      if (localStorage.getItem("pointKey") === null) {
        secondPoint = inputArray.length.toString();
        localStorage.setItem("decimalPlaceSecond", secondPoint);
      } else {
        firstPoint = inputArray.length.toString();
        localStorage.setItem("decimalPlaceFirst", firstPoint);
        break;
      }
      pointKey = "1Done";
      localStorage.setItem("pointKey", pointKey);
      break;
    case "+":
      firstNum = Num.toString();
      localStorage.setItem("firstNumber", firstNum);
      key = "+";
      localStorage.setItem("key", key);
      inputArray.length = 0;
      break;
    case "-":
      firstNum = Num.toString();
      localStorage.setItem("firstNumber", firstNum);
      key = "-";
      localStorage.setItem("key", key);
      inputArray.length = 0;
      break;
    case "/":
      firstNum = Num.toString();
      localStorage.setItem("firstNumber", firstNum);
      key = "/";
      localStorage.setItem("key", key);
      inputArray.length = 0;
      break;
    case "*":
      firstNum = Num.toString();
      localStorage.setItem("firstNumber", firstNum);
      key = "*";
      localStorage.setItem("key", key);
      inputArray.length = 0;
      break;
    case "AC":
      inputArray.length = 0;
      break;
    case "delete":
      console.log(inputArray.length);
      if (inputArray.length < 2) {
        inputArray.length = 0;
        break;
      } else {
        inputArray.length = inputArray.length - 2;
      }
      break;

    default:
      break;
  }

  key = localStorage.getItem("key");
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);
  switch (key) {
    case "+":
      ans = firstNum + secondNum;
      break;
    case "-":
      ans = firstNum - secondNum;
      break;
    case "*":
      ans = firstNum * secondNum;
      break;
    case "/":
      ans = firstNum / secondNum;
      break;

    default:
      break;
  }
  return (
    <div className="display">
      <h1 className="displayH1">
        {Number.isInteger(ans) || (!Number.isNaN(ans) && !Number.isInteger(ans))
          ? ans
          : inputArray}
      </h1>
    </div>
  );
}

export default Display;
