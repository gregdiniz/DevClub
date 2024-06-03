/*Funções - Arrow Functions */

/*Função padrão -> function (){}
Função arrow -> () => {}

Versão mais simplificada
const funcSoma = (n1,n2) => n1 + n2

Funções sem parametros
const funcSoma = () => n1 + n2

Funções com um único parametro (Caso haja um único parametro, os parenteses são opcionais)
const funcSoma = n1 => n1*/

//Caso a função possua somente uma linha, não é necessário a utilização do 'return'
const funcSoma = (n1,n2) =>  n1+n2

const n1 = 10
const n2 = 20

console.log(funcSoma(n1,n2))