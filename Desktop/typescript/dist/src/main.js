"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
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
}
showAge(14);
(0, module_1.setAge)(13);
// type inference
let mydata = [4, 'numberd'];
// const myAge=showAge(age)
