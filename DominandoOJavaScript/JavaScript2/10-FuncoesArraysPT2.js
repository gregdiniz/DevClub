/* Arrays - Métodos*/
const vetor = ['Gregory', 'Caroline', 'Diniz', 'Salvador']

//splice(unir / ligar) *Modifica o array original
vetor.splice(1,1,'Carol')
console.log(vetor)

//slice (fatiar)
const novoVetor = vetor.slice(0,2)
console.log(novoVetor)

//pop *Tira o último item do array
vetor.pop()
console.log(vetor)

//shift *Tira o primeiro item do array
vetor.shift()
console.log(vetor)