/*
    REDUCE
    - Retorna um valor(pode ser um novo array, um objeto, string, number, etc.)
    - Aceita 4 parâmetros
        - Acumulador
        - Valor atual
        - index
        - array completo
*/

const list = [1,2,3,4,5]

const soma = list.reduce((acc, current) =>{
    return acc + current
},0)//valor inicial do acumulador

console.log(soma)