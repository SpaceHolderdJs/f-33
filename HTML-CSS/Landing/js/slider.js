const sliders = $(".carousel.carousel-slider");

sliders.carousel({
  fullWidth: true,
  indicators: true,
  duration: 200,
});

const instance = M.Carousel.getInstance(sliders);

setInterval(() => {
  instance.next();
}, 5000);
