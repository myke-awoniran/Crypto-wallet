import {setAge,Jesus}from './module'
import{like}from './interfaces'
import {AppError} from './classes'
let myName:string
// let myAge:number

const welcome =function(myName:string):string{

    return `welcome to our channel user :${myName}`
}
 myName='opeyemi'

//  type destruction in typescript?

const profile={
    name:'micheal',
    age:22,
    showAge(){
        console.log(this.age)
    }

}

const {age,}:{age:number}=profile
console.log(welcome(myName) ,'of', age)
function showAge(age:number):void{
console.log(`this user age is ${age}`)
let name=(new AppError('something went very wrong',400))
console.log(name.message)
}

showAge(14)
setAge(13)
Jesus('micheal')


interface Robust{
    name:string,
    age:number
    robust:boolean
}

// type inference

let mydata=[4,'numberd']

// const myAge=showAge(age)
