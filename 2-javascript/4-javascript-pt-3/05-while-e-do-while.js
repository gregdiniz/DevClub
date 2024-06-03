/*Estrutura de repetição - WHILE e DO WHILE - ENQUANTO

while -> verifique se é a condição é VERDADEIRA então execute o bloco de código
do while-> execute o bloco de código, ao menos uma vez, então verifique se a condição ainda é VERDADEIRA.
*/

let i = 0

while(i<=20){
    console.log(i)
    i+=2
}

i = 0

console.log('----------')

do{
    console.log(i)
    i++
} while(i<4)
