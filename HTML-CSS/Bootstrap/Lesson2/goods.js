const goods = [
  {
    title: "Car1",
    text: "Some text about car 1",
    image:
      "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
    price: "10.000$",
  },
  {
    title: "Car2",
    text: "Some text about car 2",
    image:
      "https://img.freepik.com/premium-photo/black-dodge-charger-car-with-burning-fire-background_853645-14159.jpg",
    price: undefined,
  },
  {
    title: "Car3",
    text: "Some text about car 3",
    image:
      "https://img.freepik.com/premium-photo/photo-luxury-car-evening-nature-road_763111-23618.jpg",
    price: "11.000$",
  },
];

const goodsContainer = document.getElementById("goods");

goods.forEach((good) => {
  const { title, text, image, price } = good;
  goodsContainer.innerHTML += `
    <div class="card w-25 m-3">
    <img src="${image}" class="card-img-top"
     style="height: 350px; 
            filter: ${price ? "none;" : "grayscale(100%);"}
            object-fit: cover;" 
    />
        <div class="card-body">
            <h4 class="card-title">${title}</h4>
            <p class="card-text">${text}</p>
            <button class="btn 
             ${price ? "btn-success" : "btn-secondary"}"
             ${!price ? "disabled" : ""}
             >${price ? "Buy for" : "Not available"}</button>
        </div>
    </div>
    `;
});
