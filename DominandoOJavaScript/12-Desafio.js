//1 - [X] Faça um programa que SOME 2 números
const q01Number1 = 2
const q01Number2 = 5
const q01Sum = q01Number1+q01Number2
console.log(`1-> ${q01Sum}`)

//2 - [X] Faça um programa que multiplique 2 números e o resultado adicione 10
const q02Number01 = 2
const q02Number02 = 4
const q02Times = (q02Number01*q02Number02)+10
console.log(`2-> ${q02Times}`)

//3 - [X] Faça um programa que encontre a raiz quadrada de um número, multiplique o resultado por 10 e divida por 33
const q03Number = 25
const q03Square = Math.sqrt(q03Number,2)
const q03Result = (q03Square*10)/33
console.log(`3-> ${q03Result}`)

//4 - [X] Faça um programa que inicie com dois nomes, e o programa imprima na tela o seguinte dado: Olá, meu nome é (nome 1) e meu partner do CodeClub é (nome2)
const q04Name1 = "Gregory"
const q04Name2 = "Fulano"
console.log("4-> Olá, meu nome é "+q04Name1+" e meu partner do DevClub é "+q04Name2)

//5 - [X] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Ex: João e João, imprime true. João e Maria, imprime false.
const q05Name1 = "gregory"
const q05Name2 = "Gregory"
const q05Name3 = "Gregory"
console.log(`5-> ${q05Name1==q05Name2} e ${q05Name2==q05Name3}`) 

//6 - [X] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Ex: João e João, imprime false. João e Maria, imprime true.
console.log(`6-> ${q05Name1!=q05Name2} e ${q05Name2!=q05Name3}`) 

//7 - [X] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false.
const q07Name=["Gregory","Diniz"]
console.log(`7-> ${q07Name[0]==q07Name[1]}`)

//8 - [X] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true.
console.log(`8-> ${q07Name[0]!=q07Name[1]}`)

//9 - [X] Criei 5 Objetos, neles devem conter os dados de 5 pessoas que você conhece. Mínimo 5 dados por pessoa.
const q09People = [{
        name:"Gregory",
        lastName:"Santos",
        age:33
    },{
        name:"Caroline",
        lastName:"Salvador",
        age:30   
    },{
        name:"Rafael",
        lastName:"Accorsi",
        age:34  
    },{
        name:"Leonardo",
        lastName:"Cassiano",
        age:28   
    },{
        name:"Beatriz",
        lastName:"Oliveira",
        age:26   
    }    
]

//10 - [X] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.
const q10Object1 = {name:"Gregory", lastName:"Diniz"}
const q10Object2 = {name:"Gregory", lastName:"Santos"}
const q10True = q10Object1.name==q10Object2.name
const q10False = q10Object1.lastName==q10Object2.lastName
console.log(`10-> Nome:${q10True} e Sobrenome:${q10False}`)

//11 - [X] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.
/*const q11MinNumber = 1
const q11MaxNumber = 100
function generateRandomNumber(min, max){
    let difference = max - min; // cria a diferença entre os valores máximo e mínimo 
    let rand = Math.random(); // a variável rand recebe um valor aleatório
    rand = Math.floor(rand*difference); // a variável rand recebe o calor do seu arredondamento para menos multiplicado pela diferença
    rand += min; // rand recebe mais o valor do mínimo
    return rand
}

console.log(`11-> ${generateRandomNumber(q11MinNumber,q11MaxNumber)}`)*/

const q11MaxNumber = 1
const q11MinNumber = 100
const q11Random = Math.floor(Math.random() *(q11MaxNumber-q11MinNumber)+q11MinNumber)

console.log(`11-> ${q11Random}`)

//12 - [X] Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão. Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo. Ex: 2 e 5. Imprime: false.Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é menor que o segundo. Ex: 2 e 5. Imprime: true.
const q12Number1 = 27
const q12Number2 = 5

console.log(`12-> Resto= ${q12Number1%q12Number2}
N1 > N2 = ${q12Number1>q12Number2}`)

//13 - [X] Crie um programa que mostra o tamanho do Array. Ex: const array = [0, 1] imprime: 2. const array = ["banana", "Maça", "laranja"] imprime: 3
const q13Array = ["Banana","Maça","Maracujá"]

console.log(`13-> ${q13Array.length}`)