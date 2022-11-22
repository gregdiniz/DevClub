/*Controlador de Fluxo - Condicionais - Switch Case = Escolha de caso */

const caseNumber = 2

switch (caseNumber) {
    case 1:
        console.log('Número digitado foi 1')
        break;
    case 2:
        console.log('Número digitado foi 2')
        break;
    case 3:
        console.log('Número digitado foi 3')
        break;
    default:
        console.log('Foi digitado um numero maior que 3 e menor que 1')
        break;
}

const bool = false

switch (bool) {
    case true:
        console.log("It's true")
        break;

    case false:
        console.log("It's false")
        break;
}