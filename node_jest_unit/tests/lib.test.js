const lib = require("../lib");

describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positivenumber if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Jack");
    expect(result).toMatch(/Jack/);
  });
});

describe("getCurrencies", () => {
  it("shoudl return supported currencies", () => {
    const result = lib.getCurrencies();

    expect(result).toContain("USD");
  });
});

describe("getProduct", () => {
  it("should return the product with given id", () => {
    const result = lib.getProduct(1);
    expect(result).toMatchObject({ id: 1, price: 10 });
  });
});
