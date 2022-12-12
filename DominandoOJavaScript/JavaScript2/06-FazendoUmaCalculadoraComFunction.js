/*Funções - Exercício de calculadora */
const calc = (op,n1,n2) => {
    let result
    switch (op) {
        case "+":
            result = n1 + n2
            break;
        case "-":
            result = n1 - n2
            break;
        case "*":
            result = n1 * n2
            break;
        case "/":
            result = n1 / n2
            break;
        default:
            result = "Função não comportada pela calculadora."
            break;
    }
    return result
}

const n1 = 10
const n2 = 5

console.log(`A soma de ${n1} e ${n2} é ${calc("+",n1,n2)}
A diferença de ${n1} e ${n2} é ${calc("-",n1,n2)}
A multiplicação de ${n1} por ${n2} é ${calc("*",n1,n2)}
A divisão de ${n1} por ${n2} é ${calc("/",n1,n2)}`)