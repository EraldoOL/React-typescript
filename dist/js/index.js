"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 16;
console.log(x);
//inferência x annotation
let y = 12;
let z = 12;
//tipos básicos
let fistName = "matheus";
let age = 30;
const isAdmin = true;
// String != string
console.log(typeof fistName);
//object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(myNumbers.toUpperCase);
myNumbers.push(5);
console.log(myNumbers);
//tuplas
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
//myTuple = [true, false, true]
//object literals -> {prop: value}
const user = {
    name: 'Pionne',
    age: 19
};
console.log(user);
//user.job = "programador"
//any
let a = 0;
a = "teste";
a = true;
a = [];
// union type
let id = "10";
id = 200;
id = true;
id = [];
const userId = 10;
const productId = "00001";
const shirId = 123;
// enum
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "m\u00E9dio";
    Size["G"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: "camisa gola v",
    size: Size.G,
};
console.log(camisa);
//literals types 
let teste;
teste = null
//teste = "outro"
//funções
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayhelloto(name) {
    return `hello ${name}`;
}
console.log(sayhelloto('matheus'));
function loger(msg) {
    console.log(msg);
}

 //logger("teste")
 
function greeting(name, greet) {
    if (greet) {
        console.log(`ola ${greet} ${name}`);
    }
    else {
        console.log(`ola ${name}`);
    }
}
greeting('jose');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
sumNumbers(sumNumbers({ n1: 1, n2: 2 }));
function multPlyNumbers(nums) {
    return nums.n1 + nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multPlyNumbers(someNumbers));
//narrowing
//checagem tipos
function doSomething(info) {
    if (typeof info === "Number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("n foi um número");
}
doSomething(5);
doSomething(true);
//generics
function showArraysitens(arr) {
    arr.forEach((item) => {
        console.log(`item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysitens(a1);
showArraysitens(a2);
//classes
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O nome do usuário é ${this.role}`);
            return;
        }
        console.log("informação restrita");
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`a matca do carro é ${this.brand}`);
    }
}
const fusca = new Car('W', 4);
fusca.showBrand();
//herança
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("audi", 4, 2.0);
console.log(a4);
a4.showBrand();
//decorators
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
const sam = new Person("sam");
console.log(sam);
