class Person {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this._name = newName;
  }
}

const p = new Person("John");
console.log(p.name);
