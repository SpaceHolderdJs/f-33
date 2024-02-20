// BOM

setInterval;
setTimeout;

// const timeout = setTimeout(() => {
//   alert("Subscribe to the mailing");
// }, 5000);

// console.log(timeout);

// clearTimeout(timeout);

// [1, 2, 3, 4, 5].forEach((el) => {
//   setTimeout(() => {
//     console.log("Timeout", el);
//     document.title = el;
//     window.open(`https://google.com`);
//   }, el * 1000);
// });

// setTimeout(() => {
//   window.close();
// }, 5000);

// setInterval(() => {
//   console.log("Interval :)");
// }, 3000);
const normalizeTimeValue = (timeValue) => {
  return timeValue.toString().length > 1 ? `${timeValue}` : `0${timeValue}`;
};

let timer = undefined;
let secondsValue = 0;

const seconds = document.querySelector("#seconds");

const buttons = {
  start: document.querySelector("#start-btn"),
  stop: document.querySelector("#stop-btn"),
  reset: document.querySelector("#reset-btn"),
};

buttons.start.onclick = () => {
  if (!timer) {
    timer = setInterval(() => {
      secondsValue = secondsValue + 1;
      seconds.textContent = normalizeTimeValue(secondsValue);
    }, 1000);
  }
};

buttons.stop.onclick = () => {
  clearInterval(timer);
  timer = undefined;
};

buttons.reset.onclick = () => {
  secondsValue = 0;
  seconds.textContent = "00";
};

// const normalizeTimeValue1 = (timeValue) => {
//   return timeValue < 10 ? `0${timeValue}` : `${timeValue}`;
// };
