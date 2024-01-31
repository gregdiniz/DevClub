/*
Sempre que for necessário realizar uma referência ao documento HTML usamo a expressão 'document'

getElementByName() -> Traz TODOS os elementos que contém o atributo 'name' informado
*/

const nomes = document.getElementsByName("myInput")

console.log(nomes)