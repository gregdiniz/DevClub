/*1- [X] Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número que você enviou*/

const q1Func = q1Num =>{
    let q1Result = ''
    for(let q1Cont = 1; q1Cont <= q1Num; q1Cont++){
        q1Result += q1Cont +' '
    }
    return q1Result
}
console.log(q1Func(Math.floor(Math.random() * (20 - 10) + 10)))


console.log('')
/*2- [X] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.*/

const q2Func = q2Num => {
    let q2Result = ""
    if(q2Num >= 1 && q2Num <= 10){
        for(let q2Cont = 0; q2Cont <= 10; q2Cont++){
            q2Result += q2Cont + " x " + q2Num + " = " + q2Cont*q2Num + "\n"
        }
        return q2Result
    } else {
        console.log('Número não aceito. Digite um número entre 1 e 10.')
    }
}
console.log(q2Func(Math.floor(Math.random() * (10 - 1) + 1) ))


console.log('')
/*3- [X] Escreva um programa onde, você chame uma função, e ela diga a hora exata!*/

let q3Data = new Date()
let q3HoraAtual = "Hora atual: " + q3Data.getHours() + "H" + q3Data.getMinutes() + "min"
console.log(q3HoraAtual)


console.log('')
/*4- [X] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!*/

let q4Data = new Date()
let q4AnoAtual = "Estamos no ano: " + q4Data.getFullYear()
console.log(q4AnoAtual)


console.log('')
/*5- [X] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior*/

const q5Func = (n1,n2) =>{
    if(n1>n2){
        return console.log(`O número ${n1} é maior que ${n2}`)
    } else if(n2>n1){
        return console.log(`O número ${n2} é maior que ${n1}`)
    } else {
        return console.log("Os dois números digitados são iguais.")
    }
}

q5Func(Math.floor(Math.random() * (100-1) + 1),Math.floor(Math.random() * (100-1) + 1))


console.log('')
/*6- [X] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:
    - média do salário da população;
    - média do número de filhos;
    - maior salário;
- O final da leitura de dados se dará com a entrada de um salário negativo. 
- Faça isso usando uma função!*/
const q6MinSalario = 1000
const q6MaxSalario = 4000
const q6MinFilho = 0
const q6MaxFilho = 3
const q6Cidadaos=[
    {nome:"Gregory", dependentes:Math.floor(Math.random() * (q6MaxFilho-q6MinFilho) + q6MinFilho), salario:Math.floor(Math.random() * (q6MaxSalario-q6MinSalario) + q6MinSalario)},
    {nome:"Caroline", dependentes:Math.floor(Math.random() * (q6MaxFilho-q6MinFilho) + q6MinFilho), salario:Math.floor(Math.random() * (q6MaxSalario-q6MinSalario) + q6MinSalario)},
    {nome:"Rafael", dependentes:Math.floor(Math.random() * (q6MaxFilho-q6MinFilho) + q6MinFilho), salario:Math.floor(Math.random() * (q6MaxSalario-q6MinSalario) + q6MinSalario)},
    {nome:"Victor", dependentes:Math.floor(Math.random() * (q6MaxFilho-q6MinFilho) + q6MinFilho), salario:Math.floor(Math.random() * (q6MaxSalario-q6MinSalario) + q6MinSalario)},
    {nome:"Fim", dependentes:10, salario:-1}
]
let q6MediaDep, q6MediaSalario, q6MaiorSalario, q6MaiorSalarioDono, i



const q6Func = () =>{
    i = 0
    q6MediaSalario = 0
    q6MediaDep = 0
    q6MaiorSalario = q6Cidadaos[0].salario
    q6MaiorSalarioDono = q6Cidadaos[0].nome
    while(i<q6Cidadaos.length){
        if(q6Cidadaos[i].salario>0){
            if(q6Cidadaos[i].salario>q6MaiorSalario){
                q6MaiorSalario = q6Cidadaos[i].salario
                q6MaiorSalarioDono = q6Cidadaos[i].nome
            }
            q6MediaSalario += q6Cidadaos[i].salario
            q6MediaDep += q6Cidadaos[i].dependentes
            i++
        } else {
            return
        }
    }
}

q6Func()

console.log(`A média de salários é ${(q6MediaSalario/i).toFixed(0)},
A média de filho/dependentes é ${(q6MediaDep/i).toFixed(0)},
O maior salário é de R$${q6MaiorSalario} e pertence a ${q6MaiorSalarioDono}`)

console.log('')
/*7- [X] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.

Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento - Tempo em meses, que o valor está investido. A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.

Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo*/

const q7Func = (valorInicial, valorAtual, tempoInvestimento) => {
    const juros = (valorAtual-valorInicial) / (valorInicial*tempoInvestimento)
    console.log((juros*100).toFixed(2) + '%')
}
console.log(q7Func(1000,1200,10))

console.log('')
/*8- [X] Escreva um programa onde, você cria uma função geradora de desconto.
A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
Os descontos funcionam da seguinte forma:
Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO

A função deve imprimir na tela:
Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra. */

const q8Func = (nomeCliente, valorCompra, primeiraCompra, pagamentoAVista) => {
    let desconto
    if(primeiraCompra && pagamentoAVista && valorCompra > 1000){
        desconto = 30
    } else if(primeiraCompra && pagamentoAVista && valorCompra > 500 && valorCompra <= 1000){
        desconto = 25
    } else if(primeiraCompra && pagamentoAVista && valorCompra <= 500){
        desconto = 20
    } else if(primeiraCompra && !pagamentoAVista && valorCompra > 1000){
        desconto = 20
    } else if(primeiraCompra && !pagamentoAVista && valorCompra > 500 && valorCompra <= 1000){
        desconto = 15
    } else if(primeiraCompra && !pagamentoAVista && valorCompra <= 500){
        desconto = 10
    } else if(!primeiraCompra && pagamentoAVista && valorCompra > 1000){
        desconto = 20
    } else if(!primeiraCompra && pagamentoAVista && valorCompra > 500 && valorCompra <= 1000){
        desconto = 15
    } else if(!primeiraCompra && pagamentoAVista && valorCompra <= 500){
        desconto = 10
    } else if(!primeiraCompra && !pagamentoAVista && valorCompra > 1000){
        desconto = 10
    } else if(!primeiraCompra && !pagamentoAVista && valorCompra > 500 && valorCompra <= 1000){
        desconto = 5
    } else {
        desconto = 0
    }

    return desconto
}

let q8NomeCliente = "Gregory"
let q8ValorDaCompra = Math.floor(Math.random() * (1500 - 250) + 250)
let q8PrimeiraCompra = !true
let q8PagamentoAVista = !true
let q8DescontoFinal = q8Func(q8NomeCliente,q8ValorDaCompra,q8PrimeiraCompra,q8DescontoFinal)

if(q8DescontoFinal > 0){
    console.log(`Olá,${q8NomeCliente}. Muito obrigado pela compra. O valor total da sua compra foi de R$${q8ValorDaCompra}, desconto foi de ${q8DescontoFinal}% e o valor final a ser pago será de R$${q8ValorDaCompra-(q8ValorDaCompra*(q8DescontoFinal/100))}`)
} else {
    const cupom = Math.floor(Math.random()*(20-10)+10)
    console.log(`Olá,${q8NomeCliente}. Muito obrigado pela compra. O valor total da sua compra foi de R$${q8ValorDaCompra} e você ganhou um cupom de ${cupom}% para sua próxima compra.`)
}