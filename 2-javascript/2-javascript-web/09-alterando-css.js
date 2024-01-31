/*
Sempre que for necessário realizar uma referência ao documento HTML usamo a expressão 'document'

*/
const botao = document.querySelector(".myButton")

botao.style.color = "#FFF"
botao.style.backgroundColor = "#000" //Quando a propriedade do estilo possui um nome composto(Ex. background-color) o hífen é substituído por letra(s) maiúcula(s).

const titulo = document.querySelector("h1")
titulo.style.fontSize = "20"