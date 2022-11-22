/*Operadores de Comparação

==   -> Igual // Ele compara o valor, mas não compara o tipo do valor
===  -> Totalmente Igual // Ele verifica o tipo do dado // SEMPRE UTILIZE esta opções para evitar problemas

!=   -> Diferente // Ele compara o valor, mas não compara o tipo do valor
!==  -> Totalmente Diferente // Ele verifica o tipo do dado // SEMPRE UTILIZE esta opções para evitar problemas
*/

const firstNumber = '23'
const secondNumber = 23

console.log(firstNumber == secondNumber)
console.log(firstNumber === secondNumber)

const firstString = "Jão"
const secondString = "Filinhoer"

console.log(firstString == secondString)
console.log(firstString === secondString)

console.log(` 
${firstNumber != secondNumber}`)
console.log(firstNumber !== secondNumber)

console.log(firstString != secondString)
console.log(firstString !== secondString)
