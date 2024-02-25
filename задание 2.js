function someFunc(str, obj) {
  let overlap = false;
  for (let key in obj) {
    if (key == str) {
      overlap = true;
    }
  }
  return overlap;
}

const a = 1;
const b = { 1: "Number", 2: "String", 3: "Boolean" };
console.log(someFunc(a, b));
