// let name = "mnpq"
// let str = `hello ${name}`
// console.log(str)
// console.log(name.charAt(3))
// console.log('abcdef'.endsWith('ab'))
// console.log('abcdef'.startsWith('ab'))
// console.log('a b c d'.split(' '))
// console.log('a b c d')

// console.log(parseInt(10))
// console.log(parseInt(10.5))
// console.log(parseFloat(10.5))

// console.log(parseInt(5 + 6*Math.random()))

// function Test() {
//     try {
//         console.log('1')
//         console.log('2')
//         validate(1)
//         validate(-1)
//         console.log('4')
//         console.log('5')
//     } catch (error) {
//         console.log("Error " + error.message)
//     }
// }

// function validate(number) {
//     if (number < 0) {
//         throw new Error('Number must >= 0!')
//     } else {
//         console.log('True number: ' + number)
//     }
// }

// Test()

// //4. object - class
// language class: Date
// let date1 = new Date()
// console.log(date1.toISOString())
// console.log(date1.getDate())
// console.log(date1.getFullYear())
// let date2 = new Date('1990-01-11')
// console.log(date2.toLocaleString())
// console.log(date2.toLocaleDateString())

// class Human {
//     constructor(name,age) {
//         this.name = name
//         this.age = age
//     }
//     speak(){
//         console.log("Human speak")
//     }
// }
// class Student extends Human{
//     learn() {
//         console.log(this.name + " learning..")
//     } 
//     speak(){
//         console.log("Student speak")
//     }
// }

// let student1 = new Student("Nguyen Van A", 18)
// student1.learn()
// console.log(student1.speak())

// function print(number) {
//     console.log(number)
// }

// function print(string) {
//     console.log(string)
// }

// function print(boolean) {
//     console.log(boolean)
// }
// let student2 = new Student("Nguyen Van B", 20)
// student2.learn()
// console.log(student2.name)
// let student3 = {
//     name: "Nguyen Van C",
//     age: 25,
//     learn() {
//         console.log(this.name + " learning..")
//     }
// }
// student3.learn()

//5. array
//let array = [1,2,3,4]
// for (let num of array){
//     console.log(num)
// }
// function print(value){
//     console.log(value)
// }

// let evens = []
// for (let number of array) {
//     if (isEven(number)) {
//         evens.push(number)
//     }
// }

// function isEven(number) {
//     return number % 2 == 0
// }

// let evens2 = array.filter(isEven)
// console.log(evens2)

// let odds = array.filter(function(number) {
//     return number % 2 == 1
// })
// console.log(odds)
// array.push(4)
// array.pop() 
// array.unshift(0)
// array.splice(2,0,5,5.1,5.2,5.3)
// array.forEach(function print(value) {
//     console.log(value)
// })

// let arrayT = [1,2,3]
// let newArray = arrayT.map(function(number) {
//     return number * 2
// })

// console.log(newArray)

let array = [1,2,3,4] 
let evenFound = array.findIndex(function(number){
    return number % 2 == 0
})
console.log(evenFound)

let greaterThan2 = array.findIndex(function(number){
    return number > 2
})
console.log(greaterThan2)

array = [1,2,3,4,5,2]
let indexOf2 = array.indexOf(2)
console.log(indexOf2)
let lastIndexOf2 = array.lastIndexOf(2)
console.log(lastIndexOf2)
let include2 = array.includes(2)
console.log(include2)
let notExists = array.indexOf('abc')
console.log(notExists)
let newArray = array.reverse()
console.log(newArray)