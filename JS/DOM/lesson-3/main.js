const element = document.createElement("div");

element.textContent = "Div";
element.id = "element";

document.body.appendChild(element);

const onClickHandler = (event) => {
  console.log(event.target, "was clicked");
};

const onClickHandler2 = (event) => {
  console.log(event.target, "event 2 was clicked");
};

element.onclick = onClickHandler;
element.onclick = onClickHandler2;

element.onclick = null;

console.log({ element });

element.addEventListener("click", onClickHandler, { once: true });

element.addEventListener("click", onClickHandler2);

element.addEventListener("click", (event) => {
  console.log(event);
});

element.removeEventListener("click", onClickHandler);
element.removeEventListener("click", onClickHandler2);

HTMLDivElement;
HTMLInputElement;
HTMLSpanElement;

// const div = new HTMLDivElement();
// console.log(div);

// Element;

// const element2 = new Element();
// console.log(element2);

class CustomHTMLElement {
  constructor(
    tag,
    { parent = null, textContent = "", classList = [], children = [] },
    events = {}
  ) {
    this.tag = tag;
    this.events = events;
    this.children = children;

    this.element = document.createElement(tag);
    this.element.textContent = textContent;
    this.element.classList = classList;

    if (parent) {
      parent.appendChild(this.element);
    }

    this.initChilds();
    this.initEvents();
  }

  initEvents() {
    for (const eventName in this.events) {
      const event = this.events[eventName];

      if (Array.isArray(event)) {
        event.forEach((handler) => {
          this.element.addEventListener(eventName, handler);
        });
      } else {
        this.element.addEventListener(eventName, event);
      }
    }
  }

  initChilds() {
    if (typeof this.children === "string") {
      this.element.innerHTML += this.children;
      return;
    }

    if (Array.isArray(this.children)) {
      this.children.forEach((child) => {
        const childToInsert =
          child instanceof CustomHTMLElement ? child.element : child;

        this.element.appendChild(childToInsert);
      });
      return;
    }
  }
}

const customElement = new CustomHTMLElement(
  "p",
  {
    parent: document.body,
    textContent: "This is my custom p",
    classList: ["paragraph"],
  },
  {
    click: [onClickHandler, onClickHandler2],
  }
);

const customFormElement = new CustomHTMLElement(
  "form",
  {
    parent: document.body,
    children: [
      document.createElement("input"),
      document.createElement("input"),
      document.createElement("button"),
      new CustomHTMLElement(
        "h3",
        { textContent: "Hello" },
        { click: () => console.log("Hello") }
      ),
    ],
    //     children: `
    //     <input type="email" name="email" />
    //     <input type="password" />
    //     <button type="submit">Submit</button>
    //   `,
  },
  {
    submit: (event) => {
      event.preventDefault();
      console.log("Submit");
    },
  }
);
