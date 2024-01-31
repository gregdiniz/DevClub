/*
    For Each
*/

const anoAtual = new Date()
const vetor = [
    {name:'Gregory', age:anoAtual.getFullYear()-1989},
    {name:'Caroline', age:anoAtual.getFullYear()-1991},
    {name:'Leonardo', age:anoAtual.getFullYear()-1994},
    {name:'Beatriz', age:anoAtual.getFullYear()-1997},
    {name:'Rafael', age:anoAtual.getFullYear()-1988},
    {name:'Victor', age:anoAtual.getFullYear()-2009}

];
//vetor.forEach((pessoas, index, array) -->Parametros aceitos no forEach
let sumOfAges = 0
vetor.forEach((pessoas) => {
    sumOfAges += pessoas.age
})

const avarageAge = sumOfAges/vetor.length

vetor.forEach((pessoa, index)=>{
    console.log(`A pessoa chama-se ${pessoa.name}, tem ${pessoa.age} anos de idade e está na posição ${index} do vetor de objetos.`)
})
console.log(`Média de idade: ${avarageAge.toFixed(0)}`)