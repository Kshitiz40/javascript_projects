//array

const arr = [1,2,3,"string",true]

const myArr = new Array(1,2,3,4,5,6,true)
// console.log(myArr)

//Array methods

// arr.push(6)
// arr.pop()
// arr.unshift(9)
// arr.shift()
// console.log(arr.includes(9))
// console.log(arr.indexOf(9))
// const newArr = arr.join('B')//add this between all the elements
// console.log(arr)
// console.log(newArr)
// console.log(typeof newArr)

//slice and spice

// console.log("A ",arr)
// const newArr1 = arr.slice(1,3)
// console.log(newArr1)
// console.log("B ", arr)

// const newArr2 = arr.splice(1,3)
// console.log(newArr2)
// console.log("C ", arr)

const marvel_heros = ['thor','ironman','spiderman']
const dc_heros = ['superman','flash','batman']
// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1])

// const allHero = marvel_heros.concat(dc_heros)
// console.log(allHero)

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const usabel_array = another_array.flat(Infinity)
// console.log(usabel_array)

// console.log(Array.isArray("Kshitiz"))
// console.log(Array.from("Kshitiz"))
// console.log(Array.from({name: "Kshitiz"}))//tell whether key or values are converted in array

// let score1 = 100
// let score2 = 200
// let score3 = 300
// let score4 = [400,500]

// console.log(Array.of(score1,score2,score3,score4))
// console.log(Array.from(score1))//cannot pass elements and returns empty array

//objects - created by constuctor or literals
//singleton - when made from constructor
// using constructor : Object.create

const mySym = Symbol("key1")

const jsUser = {
    name: "Kshitiz",
    age: 20,
    location: "Delhi",
    email: "kshitiz@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday','Saturday'],
    "string": "someString",
    "full string": "some other string",
    [mySym]: "myKey1"
}
//console.log(jsUser.email)//access using dot
// console.log(jsUser['email'])//access like string
// //normal key value pairs can be accessed in any way but not string ones

// console.log(jsUser.string)
// console.log(jsUser["full string"])
// console.log(typeof jsUser[mySym])
// 

// jsUser.email = "Kshitiz21@gmail.com"
// console.log(jsUser.email)
// Object.freeze(jsUser)//no error but do not change
// jsUser.email = "21@gmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");
}
console.log(jsUser.greeting)//function anonymous output as only function reference comes and not function executed
console.log(jsUser.greeting())

jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}, you are ${this.age} years old`)
}

console.log(jsUser.greeting2())

//undefined comes due to one execution by itself and also comes in browser

