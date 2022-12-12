//[X] 1- Usando map, verificar se a pessoa é vip, case seja deve ser acrescetado um atribudo de "sector" onde a pessoa deve receber o valor "Camarote", caso contrário o valor que a pessoa vai receber será "Pista"  
const lista = [
    {name:'Gregory', vip:true},
    {name:'Caroline', vip:true},
    {name:'João', vip:false},
    {name:'Maria', vip:false},
    {name:'Ana', vip:true},
    {name:'Fulano', vip:false}
]

const newLista = lista.map(client =>{
    const newList = {
        name: client.name,
        sector: client.vip ? 'Camarote' : 'Pista'
    }
    return newList
})

console.log(newLista)

console.log('---------------------------------------------------------------------------------')
//[X] 2- Usando map, deve ser criado o atribudo "finalResult" que substituirá os atributos das notas e verificar se a média final do aluno é maior ou igual a 7, caso seja maior o aluno irá receber o valor de "approved", caso contrário irá receber o valor de "repproved"
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

const studentsGrades = students.map(student =>{
    const newStudents = {
        name:student.name,
        finalResult: (student.test1 + student.test2) / 2 >= 7 ? 'approved' : 'repproved'
    }
    return newStudents
})

console.log(studentsGrades)