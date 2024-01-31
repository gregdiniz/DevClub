/*
Sempre que for necessário realizar uma referência ao documento HTML usamo a expressão 'document'

getElementByClassName() -> Traz TODOS os elementos da classe informada
*/

const classes = document.getElementsByClassName("paragraph")

console.log(classes)

//A seguir há um exemplo de algum elemento de precise de mais de uma classe.
const classe2 = document.getElementsByClassName("paragraph-2")
console.log(classe2)