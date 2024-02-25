function someFunc(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`ключ - ${key}, значение - ${obj[key]}`);
    }
  }
}

const a = { 1: "Number", 2: "String", 3: "Boolean" };

someFunc(a);
