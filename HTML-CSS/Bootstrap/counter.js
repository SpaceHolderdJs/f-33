const counterProgress = document.getElementById("counter-progress");
const counterProgressBar = document.getElementById("counter-progress-bar");

const buttons = {
  decrease: document.getElementById("decrease"),
  increase: document.getElementById("increase"),
};

let counter = 0;

function changeBarStyles(counter) {
  counterProgressBar.style.width = `${counter}%`;
  counterProgressBar.textContent = `${counter}%`;
}

buttons.decrease.onclick = () => {
  counter = counter - 10;

  buttons.increase.disabled = false;

  if (counter <= 0) {
    counter = 0;
    buttons.decrease.disabled = true;
  }

  changeBarStyles(counter);
};

buttons.increase.onclick = () => {
  counter = counter + 10;

  buttons.decrease.disabled = false;

  if (counter >= 100) {
    counter = 100;
    buttons.increase.disabled = true;
  }

  changeBarStyles(counter);
};
