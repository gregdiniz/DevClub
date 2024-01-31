/* Operador typeof e delete */

const myNumber = 20
const myString = 'Sou uma string'
const myObject = {name:"Object", age: 22, height: 1.7}

console.log(typeof myNumber)
console.log(typeof myString)
console.log(typeof myObject)

console.log(myObject)
delete myObject.height
console.log(myObject)