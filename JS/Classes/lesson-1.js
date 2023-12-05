class Car {
  constructor(name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;

    return this;
  }

  showInfo() {
    console.table(this);
  }

  showPrice() {
    console.log(this.price);
  }
}
// Завдання:
// Створіть свій класс та опишіть його конструктор

// додайте до вашого класу 2 методи

const car = new Car("Ford", "Mustang", 50000);
car.showInfo();
car.showPrice();

function CarFn(name, brand, price) {
  this.name = name;
  this.brand = brand;
  this.price = price;

  this.showInfo = function () {
    console.table(this);
  };

  return this;
}

const carFn = new CarFn("Chevrolet", "Camaro", 550000);

console.log(car, carFn);

class BankAccount {
  constructor(owner, bank, balance) {
    this.owner = owner;
    this.bank = bank;
    this.balance = balance;

    return this;
  }

  increaseBalance(amount) {
    this.balance = this.balance + amount;
    return this;
  }

  decreaseBalance(amount) {
    this.balance = this.balance - amount;
    return this;
  }
}

const bankAccount = new BankAccount("Igor", "Mono", 10000);

const balance = bankAccount
  .decreaseBalance(100)
  .increaseBalance(500)
  .decreaseBalance(300)
  .decreaseBalance(1)
  .balance.toString()
  .concat(" Balance");

console.log(balance);

// Form

class FormField {
  constructor(name, placeholder, required, validate) {
    this.name = name;
    this.placeholder = placeholder;
    this.required = required;
    this.validate = validate;

    return this;
  }
}

class FormBuilder {
  constructor(fields, onSubmit) {
    this.fields = fields;
    this.onSubmit = onSubmit;

    this.values = {};
    this.inputs = {};

    this.generateFormValues();
  }

  generateFormValues() {
    this.values = {};

    for (const field of this.fields) {
      console.log(field, "this is field");
      this.values[field.name] = "";
    }

    return this.values;
  }

  render(parent) {
    this.inputs = {};

    const form = document.createElement("div");
    form.classList.add("form");

    for (const field of this.fields) {
      const input = document.createElement("input");

      const { placeholder, name } = field;

      this.inputs[name] = input;

      input.placeholder = placeholder;
      input.name = name;

      form.appendChild(input);
    }

    console.log(this.inputs, "inputs");

    const formButton = document.createElement("button");
    formButton.textContent = "Submit";
    formButton.type = "submit";

    formButton.onclick = this.submit.bind(this);
    // formButton.onclick = () => this.submit();

    form.appendChild(formButton);

    parent.appendChild(form);
  }

  submit() {
    for (const name in this.inputs) {
      this.values[name] = this.inputs[name].value;
    }

    // outer function
    this.onSubmit(this.values);
  }

  showFormData() {
    console.log(this.fields);
  }
}

const loginForm = new FormBuilder(
  [
    new FormField("email", "Enter the email", true),
    new FormField("name", "Enter the name", true),
    new FormField("password", "Enter the password", true),
  ],
  function (formData) {
    console.log(formData, "FORM DATA FROM YOUR FUNCTION");
  }
);

loginForm.showFormData();
loginForm.render(document.body);

const colorForm = new FormBuilder(
  [new FormField("color", "Enter the color", true)],
  function (fileds) {
    document.body.style.background = fileds.color;
  }
);

colorForm.render(document.body);
