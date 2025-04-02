/*Calculator Js */

let display = document.getElementById("display");

function appendValue(value) {
  let lastChar = display.value.slice(-1);
  if (
    ["+", "-", "*", "/", "%"].includes(lastChar) &&
    ["+", "-", "*", "/", "%"].includes(value)
  ) {
    return;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function percentage() {
  if (display.value) {
    display.value = (parseFloat(display.value) / 100).toString();
  }
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
    setTimeout(() => (display.value = ""), 1500);
  }
}
