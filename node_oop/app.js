class Car {
  constructor(color, size) {
    this.color = color;
    this.size = size;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    this._size = newSize;
  }
}

class Audi extends Car {
  constructor(color, size, price) {
    super(color, size);
    this.price = price;
  }

  getCompany() {
    console.log("Audi");
  }

  getPrice() {
    return this.price;
  }
}

//const c = new Car("red", "sedan");
//console.log(c.size);

const a = new Audi("Black", "Sedan", "5000");
//a.getCompany();
console.log(a);
console.log(a.getPrice());
a._size = "Blue";
console.log(a._size);
