/*Operadores Ternários ou Condicionais

? se
: se não
 */

const rain = false

const umbrela = rain ? 'levar guarda-chuva' : 'deixar guarda-chuva'

console.log(umbrela)


//Preciso tranferir meu dinheiro
const balance = true
const isNotBlocked = true
const accountExist = false

const transfOK = balance && isNotBlocked && accountExist ? 'TRANSFERÊNCIA REALIZADA' : 'TRANSFERÊNCIA NEGADA'

console.log(transfOK)