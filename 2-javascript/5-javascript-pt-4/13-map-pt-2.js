/*
    Map
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array, com a mesma quantidade de intens do array original
    - Aceita 3 parâmetros
        - item do array
        - index
        - array completo
*/

const numbers = [30, 20, 70, 50]

const doubleNumbers = number => number < 31 ? number * 2 : number
const toReais = number => `R$ ${number.toFixed(2)}` 

//É possível empilhar diversos maps, que serão sempre executados em sequência, onde a ordem de chamada das funções altera o resultado final
const newNumbers = numbers.map(doubleNumbers).map(toReais)

console.log(newNumbers.sort())