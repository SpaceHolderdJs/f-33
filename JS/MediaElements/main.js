const cities = {
  kyiv: `https://www.openstreetmap.org/export/embed.html?bbox=30.5134%2C50.4301%2C30.5334%2C50.4701&layer=mapnik
  `,
  kharkiv: `https://www.openstreetmap.org/export/embed.html?bbox=30.5134%2C50.4301%2C30.5334%2C50.4701&layer=mapnik
  `,
  poltava: `https://www.openstreetmap.org/export/embed.html?bbox=34.5314%2C49.5683%2C34.5714%2C49.6083&layer=mapnik
  `,
  chernihiv: `https://www.openstreetmap.org/export/embed.html?bbox=31.2693%2C51.4782%2C31.3093%2C51.5182&layer=mapnik
  `,
  odessa: `https://www.openstreetmap.org/export/embed.html?bbox=30.6909%2C46.4494%2C30.7909%2C46.4894&layer=mapnik
  `,
};

const iframe = document.querySelector("#map-frame");

const renderCitiesButtons = () => {
  const citiesButtonsWrapper = document.querySelector("#buttons");

  for (const cityName in cities) {
    const button = document.createElement("button");
    button.textContent = `${cityName[0].toUpperCase()}${cityName.slice(1)}`;

    button.onclick = () => {
      iframe.src = cities[cityName];
    };

    citiesButtonsWrapper.appendChild(button);
  }
};

renderCitiesButtons();

const renderControllsButtons = () => {
  const controllsWrapper = document.querySelector("#size-controlls");

  const increaseSizeButton = document.createElement("button");
  increaseSizeButton.textContent = "+";
  increaseSizeButton.onclick = () => {
    iframe.width = +iframe.width + 100;
  };

  controllsWrapper.appendChild(increaseSizeButton);

  const decreaseSizeButton = document.createElement("button");
  decreaseSizeButton.textContent = "-";
  decreaseSizeButton.onclick = () => {
    iframe.width = +iframe.width - 100;
  };

  controllsWrapper.appendChild(decreaseSizeButton);
};

renderControllsButtons();

const video = document.querySelector("video");

let posterCount = 0;

// const posterLinks = [
//   "https://www.usnews.com/object/image/00000187-05a8-d67e-a38f-2ff810260000/2023-chevrolet-corvette-z06-14.jpg?update-time=1679428714087&size=responsive640",
//   "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
//   "https://i.pinimg.com/736x/bf/0c/d7/bf0cd7dd38ee92b2f181ded842256f13.jpg",
// ];

// video.onclick = () => {
//   if (posterLinks[posterCount + 1]) {
//     posterCount++;
//   } else {
//     posterCount = 0;
//   }

//   const nextPoster = posterLinks[posterCount] || posterLinks[0];
//   video.poster = nextPoster;
// };

// <button id="video-start">Start</button>
// <button id="video-stop">Stop</button>

const playVideo = document.querySelector("#video-start");
const stopVideo = document.querySelector("#video-stop");

video.loop = true;

playVideo.onclick = () => {
  if (video.controls) video.controls = false;
  video.play();
};

stopVideo.onclick = () => {
  if (video.controls) video.controls = false;
  video.pause();
};

// document.body.onclick = () => {
//   video.play();
// };

const img = document.querySelector("img");

img.onclick = () => {
  img.src =
    "https://i.pinimg.com/736x/bf/0c/d7/bf0cd7dd38ee92b2f181ded842256f13.jpg";
};

const imgFiltersWrapper = document.querySelector("#img-filters-controlls");

const filters = [
  { filter: "blur", metric: "px" },
  { filter: "hue-rotate", metric: "deg" },
  { filter: "grayscale", metric: "%" },
  { filter: "contrast", metric: "%" },
];

// HW: Додати кнопку reset filters (вона має прибрати всі фільтри з картинки img)

filters.forEach(({ filter, metric }) => {
  const button = document.createElement("button");
  button.textContent = filter;

  button.onclick = () => {
    // style.filter (50%)
    console.log(img.style.filter);
    img.style.filter = `${filter}(150${metric})`;
  };

  imgFiltersWrapper.appendChild(button);
});
