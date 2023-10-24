const calculate = document.getElementById("calculate"); // =
const calculation = document.getElementById("calculation"); // calculation

const clearElement = document.getElementById("clear-element");
const clearAll = document.getElementById("clear-all");
const percButton = document.getElementById("pr");

const input = document.getElementById("input"); // - input

const charButtons = Array.from(document.getElementsByClassName("char"));

calculate.onclick = function () {
  calculation.textContent = input.value;
  const result = eval(input.value);
  input.value = result;
};

clearAll.onclick = function () {
  input.value = "";
  calculation.textContent = "";
};

clearElement.onclick = function () {
  input.value = input.value.slice(0, input.value.length - 1);
};

percButton.onclick = function () {
  calculation.textContent = `(${input.value})%`;
  input.value = input.value / 100;
};

for (const button of charButtons) {
  console.log(button);

  button.onclick = function () {
    input.value = input.value + button.textContent;
  };
}
