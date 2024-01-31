/*
Sempre que for necessário realizar uma referência ao documento HTML usamo a expressão 'document'

Recuperando e alterando valores inseridos no arquivo HTML
*/
const elemento = document.getElementById("inputText")
elemento.placeholder = "Texto vindo do JavaScript"

console.log(elemento.placeholder)