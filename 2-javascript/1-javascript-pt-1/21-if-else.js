/*Controle de Fluxos - Condicionais IF/ELSE 

IF = Se
ELSE = Se Não*/

const age = 20

if(age >= 18){
    console.log('Maior de 18 anos')
} else {
    console.log('Menor de 18 anos')
}

//Exemplo usando if ternário
const isOldenThan18 = age >= 18 ? 'MAIOR' : 'MENOR'
console.log(isOldenThan18)