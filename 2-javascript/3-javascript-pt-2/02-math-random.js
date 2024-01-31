//Cálculo para gerar um número aleatório entre 2 valores determinados
const minNum = 25
const maxNum = 39
console.log(Math.floor(Math.random() * (maxNum-minNum+1))+minNum)
