
var decimalBtn = document.getElementById("calc-decimal");
var clearBtn = document.getElementById("calc-clear");
var backspaceBtn = document.getElementById("calc-backspace");
var displayValElement = document.getElementById("calc-display-val");

var calcNumBtns = document.getElementsByClassName("calc-btn-num");
var calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");
var displayVal = "0";
var pendingVal;
var evalStringArray = [];

function updateDispayVal(clickobj) {
	var btnText = clickobj.target.innerText;
	if (displayVal === "0") displayVal = "";

	displayVal += btnText;
	displayValElement.innerText = displayVal;
}

function performOperration(clickobj){
	var operator = clickobj.target.innerText;
	switch (operator) {
		case "+":
			pendingVal = displayVal;
			displayVal = "0";
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("+");
			break;
		case "-":
			pendingVal = displayVal;
			displayVal = "0";
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("-");
			break;
		case "x":
			pendingVal = displayVal;
			displayVal = "0";
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("*");
			break;
		case "÷":
			pendingVal = displayVal;
			displayVal = "0";
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("/");
			break;
		case "=":
			evalStringArray.push(displayVal);
			var evalutaion = eval(evalStringArray.join(" "));
			displayVal = evalutaion + " ";
			displayValElement.innerText = displayVal;
			evalStringArray = [];
            break;

		default:
			break;
	}
};

for (let i = 0; i < calcNumBtns.length; i++) {
	calcNumBtns[i].addEventListener("click", updateDispayVal, false);
}
for (let i = 0; i < calcOperatorBtns.length; i++) {
	calcOperatorBtns[i].addEventListener("click", performOperration, false);
}

clearBtn.onclick = () => {
	displayVal = "0";
	pendingVal = undefined;
	evalStringArray = [];
	displayValElement.innerHTML = displayVal;
};

backspaceBtn.onclick = () => {
	let lengthOfDisplayVal = displayVal.length;
	displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

	if (displayVal === "") displayVal = "0";

	displayValElement.innerText = displayVal;
};

decimalBtn.onclick = () => {
	if (!displayVal.includes(".")) displayVal += ".";
	displayValElement.innerText = displayVal;
};
