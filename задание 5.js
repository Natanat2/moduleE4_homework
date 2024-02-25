class ElectroAppliances {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.plugIn = false;
  }

  switchOn() {
    this.plugIn = true;
    console.log(this.name + " - Прибор включен");
  }

  switchOff() {
    this.plugIn = false;
    console.log(this.name + " - Прибор выключен");
  }

  getPower() {
    if (this.plugIn) {
      return this.power;
    } else {
      return 0;
    }
  }

  static getAllPower(devices) {
    let allPower = 0;
    for (let i = 0; i < devices.length; i++) {
      allPower += devices[i].getPower();
    }
    console.log("Общая мощность всех приборов: " + allPower + " Вт");
  }
}

class Lamp extends ElectroAppliances {
  constructor(name, power, mark, color) {
    super(name, power);
    this.mark = mark;
    this.color = color;
  }
}

class TV extends ElectroAppliances {
  constructor(name, power, mark, color, diagonal) {
    super(name, power);
    this.mark = mark;
    this.color = color;
    this.diagonal = diagonal;
  }
}

class PC extends ElectroAppliances {
  constructor(name, power, processor, laptop) {
    super(name, power);
    this.processor = processor;
    this.laptop = laptop;
  }
}

const lamp1 = new Lamp("Лампа", 50, "Philips", "White");

const pc1 = new PC("Компьютер", 500, "Intel Core i5", false);

const tv1 = new TV("Телевизор", 200, "Samsung", "Black", 32);

lamp1.switchOn();
pc1.switchOff();
tv1.switchOn();

ElectroAppliances.getAllPower([lamp1, pc1, tv1]);
