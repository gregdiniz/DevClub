/*
Eventos
*/

const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

//Função anônima que vai ser chamada quando o event listener for executado
/*select.addEventListener("change", function(){
    console.log("mudei")
})

//Uma outra maneira para executar o mesmo tipo de código, porém utilizando parâmetros em uma função separada
function mudaSelect(event){
    console.log(event)
} 

select.addEventListener("change",mudaSelect)
*/
//Outra maneira, mais simplificada, usando funções com parâmetro
select.addEventListener("change", function(event){
    console.log(event)
})