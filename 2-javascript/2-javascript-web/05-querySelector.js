/*
Sempre que for necessário realizar uma referência ao documento HTML usamo a expressão 'document'

querySelector() -> Traz UM elemento, o primeiro que encotrar (pode ser tanto um atributo de name, como class ou tag)
*/

const qsTag = document.querySelector("input")
const qsClasse = document.querySelector(".paragraph") //O '.' no início da busca serve para indicar que estamos procurando por classes
const qsClassInput = document.querySelector("button.myInput") //Para efetuar uma busca mais específica. Nesse caso trará o primeiro button da classe 'myInput'

console.log(qsTag)
console.log(qsClasse)
console.log(qsClassInput)