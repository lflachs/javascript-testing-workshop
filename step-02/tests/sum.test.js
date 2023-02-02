const sum = require("../sum");

describe("Sum function", () => {
  it("should return the sum of two positive number", () => {
    expect(sum(2, 2)).toBe(4);
  });

  it("should return the sum of two negative number", () => {
    expect(sum(-2, -2)).toBe(-4);
  });

  it("Should return the sum of two floating numbers", () => {
    expect(sum(2.2, 2.2)).toBe(4.4);
  });

  it("Should handle decimal rounding correctly", () => {
    expect(sum(0.1, 0.2)).toBe(0.3);
  });

  it("Should return the same input if only one input is given", () => {
    expect(sum(2)).toBe(2);
  });

  it("If an array of number is passed, the sum of the array should be returned", () => {
    expect(sum([2, 2])).toBe(4);
  });

  it("Should throw an error if more than two input is given", () => {
    expect(() => sum(2, 2, 2)).toThrow(new Error("Too many arguments"));
  });

  it("should throw an error if one of the arguments is not a number", () => {
    expect(() => sum(2, "Hello")).toThrow(
      new Error("Arguments must be numbers")
    );
  });
});
