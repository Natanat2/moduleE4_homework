// Задание 1

// function someFunc(obj) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       console.log(`ключ - ${key}, значение - ${obj[key]}`);
//     }
//   }
// }

// const a = { 1: "Number", 2: "String", 3: "Boolean" };

// someFunc(a);

// Задание 2

// function someFunc(str, obj) {
//   let overlap = false;
//   for (let key in obj) {
//     if (key == str) {
//       overlap = true;
//     }
//   }
//   return overlap;
// }

// const a = 1;
// const b = { 1: "Number", 2: "String", 3: "Boolean" };
// console.log(someFunc(a, b));

// Задание 3

// function nullObj(obj) {
//   return Object.create(null);
// }

// const a = nullObj();
// console.log(a);
// console.log(a.toString);

// Задание 4

// function EllectroAppliances(name, power) {
//   this.name = name;
//   this.power = power;
//   this.plugIn = false;
// }

// EllectroAppliances.prototype.switchOn = function () {
//   this.plugIn = true;
//   console.log(this.name + " - Прибор включен");
// };

// EllectroAppliances.prototype.switchOff = function () {
//   this.plugIn = false;
//   console.log(this.name + " - Прибор выключен");
// };

// EllectroAppliances.prototype.getPower = function () {
//   if (this.plugIn) {
//     return this.power;
//   } else {
//     return 0;
//   }
// };

// function getAllPower(devices) {
//   let power = 0;
//   for (let i = 0; i < devices.length; i++) {
//     power += devices[i].getPower();
//   }
//   console.log("Общая мощность всех приборов: " + power + " Вт");
// }

// function Lamp(name, power, mark, color) {
//   EllectroAppliances.call(this, name, power);
//   this.mark = mark;
//   this.color = color;
// }

// Lamp.prototype = Object.create(EllectroAppliances.prototype);

// function TV(name, power, mark, color, diagonal) {
//   EllectroAppliances.call(this, name, power);
//   this.mark = mark;
//   this.color = color;
//   this.diagonal = diagonal;
// }

// TV.prototype = Object.create(EllectroAppliances.prototype);

// function PC(name, power, processor, laptop) {
//   EllectroAppliances.call(this, name, power);
//   this.processor = processor;
//   this.laptop = laptop;
// }

// PC.prototype = Object.create(EllectroAppliances.prototype);

// const lamp1 = new Lamp("Лампа", 100, "Philips", "White");

// const pc1 = new PC("Компьютер", 500, "Intel Core i5", false);

// const tv1 = new TV("Телевизор", 200, "Samsung", "Black", 32);

// lamp1.switchOn();
// pc1.switchOff();
// tv1.switchOn();

// getAllPower([lamp1, pc1, tv1]);

// Задание 5

// class ElectroAppliances {
//   constructor(name, power) {
//     this.name = name;
//     this.power = power;
//     this.plugIn = false;
//   }

//   switchOn() {
//     this.plugIn = true;
//     console.log(this.name + " - Прибор включен");
//   }

//   switchOff() {
//     this.plugIn = false;
//     console.log(this.name + " - Прибор выключен");
//   }

//   getPower() {
//     if (this.plugIn) {
//       return this.power;
//     } else {
//       return 0;
//     }
//   }

//   static getAllPower(devices) {
//     let allPower = 0;
//     for (let i = 0; i < devices.length; i++) {
//       allPower += devices[i].getPower();
//     }
//     console.log("Общая мощность всех приборов: " + allPower + " Вт");
//   }
// }

// class Lamp extends ElectroAppliances {
//   constructor(name, power, mark, color) {
//     super(name, power);
//     this.mark = mark;
//     this.color = color;
//   }
// }

// class TV extends ElectroAppliances {
//   constructor(name, power, mark, color, diagonal) {
//     super(name, power);
//     this.mark = mark;
//     this.color = color;
//     this.diagonal = diagonal;
//   }
// }

// class PC extends ElectroAppliances {
//   constructor(name, power, processor, laptop) {
//     super(name, power);
//     this.processor = processor;
//     this.laptop = laptop;
//   }
// }

// const lamp1 = new Lamp("Лампа", 50, "Philips", "White");

// const pc1 = new PC("Компьютер", 500, "Intel Core i5", false);

// const tv1 = new TV("Телевизор", 200, "Samsung", "Black", 32);

// lamp1.switchOn();
// pc1.switchOff();
// tv1.switchOn();

// ElectroAppliances.getAllPower([lamp1, pc1, tv1]);
