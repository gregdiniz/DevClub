/*
    Map
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array, com a mesma quantidade de intens do array original
    - Aceita 3 parâmetros
        - item do array
        - index
        - array completo
*/

const numbers = [1, 2, 3, 4, 5, 6, 7]
const students = [
    {name: 'Gregory', age:33},
    {name: 'Rodolfo', age:27},
    {name: 'Leonardo', age:28},
    {name: 'Rafael', age:34},
    {name: 'Thiago', age:35},
    {name: 'Gabriel', age:12},
    {name: 'Victor', age:13}
];

const newNumbers = numbers.map(number => number * 2)

console.log(numbers)
console.log(newNumbers)
console.log('')

const newStudents = students.map((student) =>{
    const newStudent = {
        name: student.name === 'Gregory' ?  student.name + ' BRABO' : student.name + ' brabinho',
        age: student.age >= 30 ? student.age - 5 : student.age
    }
    return newStudent
})

console.log(students)
console.log(newStudents)