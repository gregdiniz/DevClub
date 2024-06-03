/*
    For Each

    Melhor usado para manipulação de arrays de objetos.
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
//vetor.forEach((item, index, array) -->Parametros aceitos no forEach, sendo que o ITEM, além de ser obrigatório, é a posição atual do loop, o INDEX é o indice da posição atual do indíce dentro do array e o ARRAY é usado case haja a necessidade de exibir o array por completo a cada iteração.
let sumOfAges = 0
//forEach usado para acrescentar à sumOfAges a soma da idade de cada um dos objetos que estão dentro do Array
vetor.forEach((pessoas) => {
    sumOfAges += pessoas.age
})

const avarageAge = sumOfAges/vetor.length

vetor.forEach((pessoa, index)=>{
    console.log(`A pessoa chama-se ${pessoa.name}, tem ${pessoa.age} anos de idade e está na posição ${index} do vetor de objetos.`)
})
console.log(`Média de idade: ${avarageAge.toFixed(0)}`)

console.log('-------------------------------------')

//Exibição dos dados sem nenhum tratamento
vetor.forEach((item, index, array)=>{
    console.log(item)
    console.log(index)
    console.log(array)
})