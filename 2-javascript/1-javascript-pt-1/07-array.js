/* Array - vetor - lista */
//Dentro dos arrays, a primeira casa é sempre 0(Zero)

const numbers =[10, "String na posição 1", {name:"Objeto dentro do array", occupation:"armazenamento de dados"}, 15+35]

console.log(numbers)
//Alteração de um valor dentro do array
numbers[1] = 'Gregory'
console.log(numbers)

const people = [{
        name: "Fulano",
        age: 22,
        sex: "male"
    },
    {
        name: "Cicrano",
        age: 33,
        sex: "male"
    }
]

const index = 0
console.log(`Selecionando a propriedade 'name' do objeto armazenado na casa ${index} -> `+people[index].name)