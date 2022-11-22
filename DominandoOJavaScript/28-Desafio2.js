// 1- [ ] Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"
const q1MinNumber = 1
const q1MaxNumber = 20
const q1Number = Math.floor(Math.random() * (q1MaxNumber - q1MinNumber) + q1MinNumber)

if(q1Number > 10){
    console.log(`1- O numero ${q1Number} é maior do que 10`)
} else if(q1Number === 10) {
    console.log(`1- O numero ${q1Number} é igual a 10`)
} else {
    console.log(`1- O numero ${q1Number} é menor do que 10`)
}

console.log()
// 2- [ ] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO
const q2Object = {
    name: 'Gregory',
    country: 'Brazil'
}

if(q2Object.country === "Brazil"){
    console.log(`2- A pessoa ${q2Object.name} é brasileiro(a)`)
} else {
    console.log(`2- A pessoa ${q2Object.name} não é brasileiro(a)`)
}

console.log()
// 3- [ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.
const q3MaxNumber = 1
const q3MinNumber = 10
const q3MyNumber = Math.floor(Math.random() *(q3MaxNumber-q3MinNumber) + q3MinNumber)
const q3Winner = Math.floor(Math.random() * (q3MaxNumber-q3MinNumber) + q3MinNumber)
console.log(`3- Seu número da sorte é ${q3MyNumber} e o numero sorteado foi ${q3Winner}`)
if(q3MyNumber === q3Winner){
    console.log('Parábens! Você foi o grande premiado.')
} else {
    console.log('Não foi dessa vez... Tente de novamente.')
}

console.log()
// 4- [ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.
const q4MinNumber = 1
const q4MaxNumber = 15
const q4Number1 = Math.floor(Math.random() * (q4MaxNumber-q4MinNumber)+q4MinNumber)
const q4Number2 = Math.floor(Math.random() * (q4MaxNumber-q4MinNumber)+q4MinNumber)
const q4Number3 = Math.floor(Math.random() * (q4MaxNumber-q4MinNumber)+q4MinNumber)
let q4Maior = q4Number1
let q4Menor = q4Number1

if(q4Number2 > q4Maior && q4Number2 > q4Number3){
    q4Maior = q4Number2
} else if(q4Number3 > q4Maior && q4Number3 > q4Number2){
    q4Maior = q4Number3
}

if(q4Number2 < q4Menor && q4Number2 < q4Number3){
    q4Menor = q4Number2
} else if(q4Number3 < q4Menor && q4Number3 < q4Number2){
    q4Menor = q4Number3
}

console.log(`4- O maior número foi ${q4Maior} e o menor número foi ${q4Menor}`)

console.log()
// 5- [ ] Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.
const q5Array = [
    {nome: "Nome1", idade: 1, sexo: "Masculino", profissao: "Profissao1", nacionalidade: "Brasileiro(a)"},
    {nome: "Caroline", idade: 30, sexo: "Feminino", profissao: "Fisioterapeuta", nacionalidade: "Brasileiro(a)"},
    {nome: "Nome3", idade: 3, sexo: "Feminino", profissao: "Profissao3", nacionalidade: "Brasileiro(a)"},
    {nome: "Gregory", idade: 33, sexo: "Masculino", profissao: "Programador", nacionalidade: "Brasileiro(a)"},
    {nome: "Nome5", idade: 5, sexo: "Masculino", profissao: "Profissao5", nacionalidade: "Brasileiro(a)"}
]
let q5Aproved = "O(s) aprovado(s) é(são): "

for(let q5Obj of q5Array){
    for(let q5Prop in q5Obj){
        if(q5Obj[q5Prop.idade] >= 18 && q5Obj[q5Prop.nascimento] === "Brasileiro(a)" ){
            //console.log(`${q5Prop}: ${q5Obj[q5Prop]}`)
            q5Aproved += q5Obj[q5Prop.nome] + " "
        }
    }
}

console.log(`5- ${q5Aproved}`)


console.log("")
//6- [ ] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.
const q6MinNota = 0
const q6MaxNota = 10
const q6NotaJurado = Math.floor(Math.random() * (q6MaxNota- q6MinNota) + q6MinNota)

switch (q6NotaJurado) {
    case 0:
        console.log("6- Terrível! Sua nota é 0.")
        break;
    case 1:
        console.log("6- Horrível! Sua nota é 1.")
        break;
    case 2:
        console.log("6- Péssimo! Sua nota é 2.")
        break;
    case 3:
        console.log("6- Muito ruim! Sua nota é 3.")
        break;
    case 4:
        console.log("6- Ruim! Sua nota é 4.")
        break;
    case 5:
        console.log("6- Mal! Sua nota é 5")
        break;
    case 6:
        console.log("6- Mediano! Sua nota é 6.")
        break;
    case 7:
        console.log("6- Bom! Sua nota é 7.")
        break;
    case 8:
        console.log("6- Muito bom! Sua nota é 8.")
        break;
    case 9:
        console.log("6- Excelente! Sua nota é 9.")
        break;
    case 10:
        console.log("6- Perfeito! Sua nota é 10.")
        break;
    default:
        console.log("Nota inválida. Será somente aceito valores entre 0 e 10.")
        break;
}

console.log("")
// 7- [ ] Faça um programa onde leia um numero e diga se ele é par ou impar.
const q7MinNumber = 0
const q7MaxNumber = 100
const q7Number = Math.floor(Math.random() * (q7MaxNumber-q7MinNumber) + q7MinNumber)

if(q7Number === 0){
    console.log(`7- O número ${q7Number} é um número neutro.`)
} else {
    if(q7Number % 2 === 1){
        console.log(`7- O número ${q7Number} é um número IMPAR.`)
    } else {
        console.log(`7- O número ${q7Number} é um número PAR.`)
    }
}

console.log("")
// 8-[ ] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.
const q8MinNum = 1
const q8Maxnum = 100
const q8Number = Math.floor(Math.random() * (q8Maxnum-q8MinNum) + q8MinNum)

if (q8Number % 2 === 1){
    let q8Primo = 0
    for(let i=1; i<q8Number; i++){
        if(q8Number % i === 0){
            q8Primo++
        }
    }
    if(q8Primo < 3){
        if (q8Number % 5 === 0){
            console.log(`8- O número ${q8Number} é IMPAR`)
        } else {
            console.log(`8- O número ${q8Number} é IMPAR e PRIMO`)
        }
    } else {
        console.log(`8- O número ${q8Number} é IMPAR.`)
    }
} else {
    if (q8Number % 5 === 0){
        console.log(`8- O número ${q8Number} é PAR e divisível por 5`)
    } else {
        console.log(`8- O número ${q8Number} é PAR.`)
    }
}

conselo.log("")
// 9- [ ] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.
const q9MinNum = 1
const q9MaxNum = 50
const q9NumOne = Math.floor(Math.random() * (q9MaxNum-q9MinNum) + q9MinNum)
const q9NumTwo = Math.floor(Math.random() * (q9MaxNum-q9MinNum) + q9MinNum)
const q9NumThree = Math.floor(Math.random() * (q9MaxNum-q9MinNum) + q9MinNum)
const q9NumFour = Math.floor(Math.random() * (q9MaxNum-q9MinNum) + q9MinNum)

if(q9NumOne%2===0 && q9NumTwo%2===0 && q9NumThree%2===0 && q9NumFour%2==0){
    console.log("9- Todos os números são PARES.")
} else if(q9NumOne%2!=0 && q9NumTwo%2!=0 && q9NumThree%2!=0 && q9NumFour%2!=0){
    console.log("9- Todos os números são ÍMPARES.")
} else {
    console.log("9- Há números PARES e ÍMPARES")
}