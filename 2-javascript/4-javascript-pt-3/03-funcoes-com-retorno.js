/*Função - Return*/
//Funções sem 'return' são do tipo VOID(vazio) e não retornam valores
function funcSoma(n1,n2){
    return n1+n2
}

const n1 = 20
const n2 = 30

console.log(`O primeiro númenro é ${n1}
O meu segundo número é ${n2}
E a soma dos dois é ${funcSoma(n1,n2)}`)