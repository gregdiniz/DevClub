/*
    FILTER
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array APENAS com os elementos filtrados
    - Aceita 3 parâmetros
        - item do array
        - index
        - array completo
*/
const lista = [
    {name:'Gregory', vip:true},
    {name:'Caroline', vip:true},
    {name:'João', vip:false},
    {name:'Maria', vip:false},
    {name:'Ana', vip:true},
    {name:'Fulano', vip:false}
]

const onlyVip = lista.filter(client => client.vip) //retorna somente os valores verdadeiros desse atributo

console.log(onlyVip)
console.log('--------------------------------------')

const notaMax = 10
const notaMin = 4
const students = [
    {name: 'Gregory', test1: Math.floor(Math.random() * (notaMax-notaMin)+notaMin), test2: Math.floor(Math.random() * (notaMax-notaMin)+notaMin)},
    {name:'Caroline', test1: Math.floor(Math.random() * (notaMax-notaMin)+notaMin), test2: Math.floor(Math.random() * (notaMax-notaMin)+notaMin)},
    {name:'João',  test1: Math.floor(Math.random() * (notaMax-notaMin)+notaMin), test2: Math.floor(Math.random() * (notaMax-notaMin)+notaMin)},
    {name:'Maria',  test1: Math.floor(Math.random() * (notaMax-notaMin)+notaMin), test2: Math.floor(Math.random() * (notaMax-notaMin)+notaMin)},
    {name:'Ana',  test1: Math.floor(Math.random() * (notaMax-notaMin)+notaMin), test2: Math.floor(Math.random() * (notaMax-notaMin)+notaMin)},
    {name:'Fulano',  test1: Math.floor(Math.random() * (notaMax-notaMin)+notaMin), test2: Math.floor(Math.random() * (notaMax-notaMin)+notaMin)}
]

const onlyApproved = students.filter(aluno => (aluno.test1 + aluno.test2) / 2 >= 7 )

console.log(onlyApproved)