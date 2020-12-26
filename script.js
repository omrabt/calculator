const num = document.querySelectorAll(".num");
const logic = document.querySelectorAll(".logic");
const eq = document.querySelector(".eq");
const result = document.querySelector("#result");

let firstNumber = "";
let secondNumber = "";
let logicIcon = "";
let tempLogic = "";
function eventListeners() {
  num.forEach((item) => {
    item.addEventListener("click", addNumber);
  });
  logic.forEach((item) => {
    item.addEventListener("click", addLogic);
  });
  eq.addEventListener("click", eqFunc);
}
let addNumber = (e) => {
  if (logicIcon === "") {
    firstNumber += e.target.innerText;
    console.log("firstNumber = " + firstNumber);
    result.innerText = "1.st-> " + firstNumber;
  } else {
    secondNumber += e.target.innerText;
    console.log("secondNumber = " + secondNumber);
    result.innerText = "2.nd-> " + secondNumber;
  }
};
let addLogic = (e) => {
  logicIcon = e.target.innerText;
  if (logicIcon === "C") {
    cls();
  }
  if (logicIcon !== "" && secondNumber !== "") {
    let tmp;
    tmp = logicIcon;
    logicIcon = tempLogic;
    tempLogic = tmp;
    eqFunc();
  } else {
    result.innerText = logicIcon;
    tempLogic = logicIcon;
    console.log("logicIcon = " + logicIcon);
  }
};
let eqFunc = (e) => {
  switch (logicIcon) {
    case "%": {
      firstNumber = (firstNumber % secondNumber).toFixed(3);
      result.innerText = "1.st-> " + firstNumber;
      secondNumber = "";
      break;
    }
    case "/": {
      firstNumber = (firstNumber / secondNumber).toFixed(3);
      result.innerText = "1.st-> " + firstNumber;
      secondNumber = "";
      break;
    }
    case "X": {
      firstNumber = (firstNumber * secondNumber);
      result.innerText = "1.st-> " + firstNumber;
      secondNumber = "";
      break;
    }
    case "-": {
      firstNumber = (firstNumber - secondNumber);
      result.innerText = "1.st-> " + firstNumber;
      secondNumber = "";
      break;
    }
    case "+": {
      firstNumber = (parseFloat(firstNumber) + parseFloat(secondNumber));
      result.innerText = "1.st-> " + firstNumber;
      secondNumber = "";
      break;
    }
  }
};
let cls = (e) => {
  firstNumber = "";
  secondNumber = "";
  result.innerHTML = "";
  logicIcon = "";
};
eventListeners();
