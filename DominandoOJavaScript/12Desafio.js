/*


    [X] Faça um programa que SOME 2 números
    [X] Faça um programa que multiplique 2 números e o resultado adicione 10
    [X] Faça um programa que encontre a raiz quadrada de um número, multiplique o resultado por 10 e divida por 33
    [X] Faça um programa que inicie com dois nomes, e o programa imprima na tela o seguinte dado: Olá, meu nome é (nome 1) e meu partner do CodeClub é (nome2)
    [X] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Ex: João e João, imprime true. João e Maria, imprime false.
    [X] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Ex: João e João, imprime false. João e Maria, imprime true.
    [X] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false.
    [X] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true.
    [X] Criei 5 Objetos, neles devem conter os dados de 5 pessoas que você conhece. Mínimo 5 dados por pessoa.
    [X] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.
    [X] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.
    [X] Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão. Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo. Ex: 2 e 5. Imprime: false.Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é menor que o segundo. Ex: 2 e 5. Imprime: true.
    [ ] Crie um programa que mostra o tamanho do Array. Ex: const array = [0, 1] imprime: 2. const array = ["banana", "Maça", "laranja"] imprime: 3
*/
// console.log(`-> ${}`)
//1
console.log(`1-> ${2+2}`)

//2
console.log(`2-> ${(2*2)+10}`)

//3
console.log(`3-> ${((Math.sqrt(25,5))*10)/33}`)

//4
const q4Name1 = "Gregory"
const q4Name2 = "Fulano"
console.log("4-> Olá, meu nome é "+q4Name1+" e meu partner do DevClub é "+q4Name2)

//5
const q5Name1 = "gregory"
const q5Name2 = "Gregory"
const q5Name3 = "Gregory"
console.log(`5-> ${q5Name1==q5Name2} e ${q5Name2==q5Name3}`) 

//6
console.log(`6-> ${q5Name1!=q5Name2} e ${q5Name2!=q5Name3}`) 

//7
const q7Name=["Gregory","Diniz"]
console.log(`7-> ${q7Name[0]==q7Name[1]}`)

//8
console.log(`8-> ${q7Name[0]!=q7Name[1]}`)

//9
const q9People = [{
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

//10
console.log(`10-> ${q9People[0].name==q9People[1].name}`)

//11
const q11MinNumber = 1
const q11MaxNumber = 100
function generateRandomNumber(min, max){
    let difference = max - min; // cria a diferença entre os valores máximo e mínimo 
    let rand = Math.random(); // a variável rand recebe um valor aleatório
    rand = Math.floor(rand*difference); // a variável rand recebe o calor do seu arredondamento para menos multiplicado pela diferença
    rand += min; // rand recebe mais o valor do mínimo
    return rand
}

console.log(`11-> ${generateRandomNumber(q11MinNumber,q11MaxNumber)}`)

//12
const q12Number1 = 27
const q12Number2 = 5

console.log(`12-> Resto= ${q12Number1%q12Number2}
N1 > N2 = ${q12Number1>q12Number2}`)

//13
const q13Array = ["Banana","Maça","Maracujá"]

console.log(`13-> ${q13Array.length}`)