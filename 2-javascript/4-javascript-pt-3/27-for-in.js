/*Estrutura de Repetição - FOR IN*/

const student = {
    name: 'Gregory',
    age: 33,
    genre: 'male'
}

/*for(let property in student){
    console.log(property)
}*/

for(let property in student){
    console.log(`${property}: ${student[property]}`)
}