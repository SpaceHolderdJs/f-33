class MyClass {
  static sceneSizes = {
    w: 1000,
    h: 1500,
  };

  static method = function () {
    console.log("Console.log from static method");
  };

  constructor(a) {
    this.a = a;
  }

  method() {
    console.log(this.a);
  }
}

const myClass = new MyClass(100);
myClass.method();
MyClass.method();

class A {
  static children = [];
  static addChildren = function (children) {
    A.children.push(children);
  };

  #private;

  constructor(value, options) {
    // initialization
    this.value = value;
    this.#private = "private";

    for (const key in options) {
      this[key] = options[key];
    }

    A.addChildren(this);
  }

  show() {
    return this.isVisible ? this.value : "Forbidden";
  }

  #showPrivate() {
    console.log(this.#private, "pr");
  }
}

const a = new A("value", { isVisible: false, isWritable: true });
console.log(a, "a", a.show());
a.isVisible = true;
console.log(a, "a", a.show());
a.showPrivate();

class B extends A {
  // polimorfism
  show() {
    return this.value.length > 3 ? "Long" : "Short";
  }
}

const b = new B("value", { isVisible: false });
console.log(b.show(), "b (show)");

class C extends B {
  show() {
    return "Show from C";
  }
}

const c = new C("Value C");
console.log(c.show());

console.log(A.children, "A children");
