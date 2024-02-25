function EllectroAppliances(name, power) {
  this.name = name;
  this.power = power;
  this.plugIn = false;
}

EllectroAppliances.prototype.switchOn = function () {
  this.plugIn = true;
  console.log(this.name + " - Прибор включен");
};

EllectroAppliances.prototype.switchOff = function () {
  this.plugIn = false;
  console.log(this.name + " - Прибор выключен");
};

EllectroAppliances.prototype.getPower = function () {
  if (this.plugIn) {
    return this.power;
  } else {
    return 0;
  }
};

function getAllPower(devices) {
  let power = 0;
  for (let i = 0; i < devices.length; i++) {
    power += devices[i].getPower();
  }
  console.log("Общая мощность всех приборов: " + power + " Вт");
}

function Lamp(name, power, mark, color) {
  EllectroAppliances.call(this, name, power);
  this.mark = mark;
  this.color = color;
}

Lamp.prototype = Object.create(EllectroAppliances.prototype);

function TV(name, power, mark, color, diagonal) {
  EllectroAppliances.call(this, name, power);
  this.mark = mark;
  this.color = color;
  this.diagonal = diagonal;
}

TV.prototype = Object.create(EllectroAppliances.prototype);

function PC(name, power, processor, laptop) {
  EllectroAppliances.call(this, name, power);
  this.processor = processor;
  this.laptop = laptop;
}

PC.prototype = Object.create(EllectroAppliances.prototype);

const lamp1 = new Lamp("Лампа", 100, "Philips", "White");

const pc1 = new PC("Компьютер", 500, "Intel Core i5", false);

const tv1 = new TV("Телевизор", 200, "Samsung", "Black", 32);

lamp1.switchOn();
pc1.switchOff();
tv1.switchOn();

getAllPower([lamp1, pc1, tv1]);
