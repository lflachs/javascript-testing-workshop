function sum(a, b) {
  if (Array.isArray(a)) {
    if (a.length === 1) {
      return a[0];
    } else if (a.length === 2) {
      a = a[0] + a[1];
      b = undefined;
    } else {
      throw new Error("Too many arguments");
    }
  }

  if (arguments.length === 1) {
    return a;
  } else if (arguments.length > 2) {
    throw new Error("Too many arguments");
  }

  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Arguments must be numbers");
  }

  return Number((a + b).toFixed(1));
}

module.exports = sum;
