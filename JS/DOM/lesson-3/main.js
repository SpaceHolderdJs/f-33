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

class CustomInputElement extends CustomHTMLElement {
  constructor(tag, parameters, events) {
    super(tag, parameters, events);

    const {
      placeholder = "",
      type = "text",
      value = "",
      min = 0,
      max = 10,
      step = 1,
    } = parameters;

    this.placeholder = placeholder;
    this.type = type;

    this.value = value;
    this.element.value = value;

    this.element.placeholder = placeholder;
    this.element.type = type;

    if (type === "range") {
      this.min = min;
      this.max = max;
      this.step = step;

      this.element.min = min;
      this.element.max = max;
      this.element.step = step;
    }
  }
}

// const customElement = new CustomHTMLElement(
//   "p",
//   {
//     parent: document.body,
//     textContent: "This is my custom p",
//     classList: ["paragraph"],
//   },
//   {
//     click: [onClickHandler, onClickHandler2],
//   }
// );

const customFormElement = new CustomHTMLElement(
  "form",
  {
    parent: document.querySelector("#form-wrapper"),
    classList: ["login-form"],
    children: [
      new CustomHTMLElement("h1", {
        textContent: "Log in",
      }),
      new CustomInputElement("input", {
        placeholder: "Email",
        value: "email@gmail.com",
      }),
      new CustomInputElement("input", {
        placeholder: "Password",
        type: "password",
      }),
      new CustomInputElement("input", { type: "color" }),
      new CustomInputElement(
        "input",
        {
          type: "range",
          min: 0,
          max: 100,
          step: 0.5,
        },
        {
          input: (event) => {
            const h1 = document.querySelector("h1");
            h1.textContent = event.target.value;
            console.log(event.target.value, "input");
          },
          change: (event) => {
            const h1 = document.querySelector("h1");
            h1.textContent = "Log in";
            console.log(event.target.value, "change");
          },
        }
      ),
      new CustomHTMLElement("button", { textContent: "Login" }),
    ],
  },
  {
    submit: (event) => {
      event.preventDefault();
      console.log("Submit");
    },
  }
);

customFormElement.children.push(`<p>Hello</p>`);
customFormElement.initChilds();
