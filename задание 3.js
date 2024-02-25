function nullObj(obj) {
  return Object.create(null);
}

const a = nullObj();
console.log(a);
console.log(a.toString);
