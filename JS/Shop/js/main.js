const shopApi = new API("https://fakestoreapi.com/products", {
  "Content-Type": "application/json",
});

const cartApi = new API("https://fakestoreapi.com/carts/1", {
  "Content-Type": "application/json",
});

class Cart {
  constructor(cartElements = []) {
    this.cartElements = cartElements;
  }

  async add(item) {
    this.cartElements.push(item);

    const response = await cartApi.patch("", null, {
      userId: 1,
      products: this.cartElements.map((item) => ({
        productId: item.id,
        quantity: 1,
      })),
    });

    this.render();

    console.log(response, "response");
    console.log(this.cartElements);
  }

  async remove(item) {
    this.cartElements = this.cartElements.filter(
      (cartItem) => cartItem.id !== item.id
    );

    const response = await cartApi.patch("", null, {
      userId: 1,
      products: this.cartElements.map((item) => ({
        productId: item.id,
        quantity: 1,
      })),
    });

    this.render();

    console.log(response, "response");
    console.log(this.cartElements);
  }

  render() {
    // HW - finish this method
  }
}

const cart = new Cart();

class Catalog {
  constructor(items = []) {
    this.items = items;
    this.view = document.querySelector("#catalog-items");

    this.getCatalogItems().then(() => this.render(this.view));
  }

  async getCatalogItems() {
    const items = await shopApi.get("/");
    this.items = items.map((item) => new Item(item));
    console.log(items);

    return this;
  }

  render(parent) {
    this.items.forEach((item) => {
      item.render(parent);
    });
  }
}

class Item {
  static initialItemData = {
    id: 0,
    title: "",
    category: "",
    description: "",
    image: "",
    rating: { rate: 0, count: 0 },
  };

  constructor(itemData = Item.initialItemData) {
    this.itemData = itemData;
  }

  render(parent) {
    parent.innerHTML += `
    <div class="item-card">
        <img src=${this.itemData.image} />
        <article>
            <h3>${this.itemData.title}</h3>
            <p>${this.itemData.description.slice(0, 100)}...</p>
            <p>${this.itemData.category}</p>
            <p>${this.itemData.rating.rate}</p>
        </article>
        <button 
         id="btn-${this.itemData.id}"
         class="add-to-cart-btn" 
         data-itemId="${this.itemData.id}">Add to cart</button>
    </div>
    `;

    // TODO: find better way (CustomHTMLElement)
    setTimeout(() => {
      const addToCartButton = document.querySelector(
        `#btn-${this.itemData.id}`
      );
      addToCartButton.onclick = () => {
        const isAddedToCart = cart.cartElements.find(
          (cartItem) => cartItem.id === this.itemData.id
        );

        isAddedToCart ? cart.remove(this.itemData) : cart.add(this.itemData);
      };
    });
  }
}

const catalog = new Catalog();
