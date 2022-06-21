"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
const classes_1 = require("./classes");
let myName;
// let myAge:number
const welcome = function (myName) {
    return `welcome to our channel user :${myName}`;
};
myName = 'opeyemi';
//  type destruction in typescript?
const profile = {
    name: 'micheal',
    age: 22,
    showAge() {
        console.log(this.age);
    }
};
const { age, } = profile;
console.log(welcome(myName), 'of', age);
function showAge(age) {
    console.log(`this user age is ${age}`);
    let name = (new classes_1.AppError('something went very wrong', 400));
    console.log(name.message);
}
showAge(14);
(0, module_1.setAge)(13);
(0, module_1.Jesus)('micheal');
// type inference
let mydata = [4, 'numberd'];
// const myAge=showAge(age)
