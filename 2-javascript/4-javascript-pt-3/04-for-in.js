/*Estrutura de Repetição - FOR IN
Usado para iterar objetos com maior facilidade

for (const key in object){
    console.log(key)
}

*/

const student = {
    name: 'Gregory',
    age: 33,
    gender: 'male'
}

//Dessa maneira irá trazer tudo que há dentro do objeto
for(let property in student){
    console.log(property)
}

//irá trazer tudo que á dentro do objeto, mas há uma liberdade maior para manipular as propriedades dos objetos.
for(let property in student){
    console.log(`${property} - ${student[property]}`)
}