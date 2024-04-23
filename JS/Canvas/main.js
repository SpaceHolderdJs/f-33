const canvas = document.querySelector("canvas");
const canvasContext = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvasContext.moveTo(0, 0);
// canvasContext.lineTo(1500, 1500);

// canvasContext.strokeStyle = "rgb(100, 200, 10)";

// canvasContext.stroke();

// canvasContext.moveTo(100, 100);
// canvasContext.lineTo(100, 300);

// canvasContext.strokeStyle = "darkred";

// canvasContext.stroke();

function drawLines(linesCount) {
  for (let count = 0; count < linesCount; count++) {
    setTimeout(() => {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);

      canvasContext.moveTo(x, y);

      const w = Math.floor(Math.random() * 1500);
      const h = Math.floor(Math.random() * 1500);

      canvasContext.strokeStyle = "aqua";
      canvasContext.lineTo(w, h);

      canvasContext.stroke();
    }, count * 200);
  }
}

// drawLines(300);

// lines

// [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].forEach((distance) => {
//   canvasContext.moveTo(distance, 0);
//   canvasContext.strokeStyle = "darkred";

//   canvasContext.lineTo(1500, 800);

//   canvasContext.stroke();
// });

// Square

// function drawRects(q = 10, size = 100, y = 0) {
//   //   const colors = ["aqua", "lime", "darkred", "gold", "lightskyblue"];
//   const colors = ["red", "#00ff00", "rgb(0, 0, 255)"];

//   for (let count = 0; count < q; count++) {
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];

//     canvasContext.fillStyle = randomColor;
//     canvasContext.fillRect(count * size, y, size, size);
//   }
// }

// drawRects(100);

// setInterval(() => {
//   for (let count = 0; count < window.innerHeight; count = count + 5) {
//     drawRects(1000, 5, count);
//   }
// }, 1000);

// Sircles
// canvasContext.strokeStyle = "red";
// canvasContext.moveTo(100, 100);
// canvasContext.beginPath();
// canvasContext.arc(100, 100, 40, Math.PI * Math.sin(60), true);
// canvasContext.closePath();
// canvasContext.stroke();

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 150;
const fillColor = "blue";

// Draw the circle
canvasContext.beginPath(); // Begin a new path
canvasContext.arc(centerX, centerY, radius, 0, 2 * Math.PI); // Define the circle
canvasContext.fillStyle = fillColor; // Set the fill color
canvasContext.fill(); // Fill the circle with the specified color
canvasContext.closePath(); // Close the path
