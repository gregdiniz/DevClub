/*Funções - Parametros / Agumentos*/

function funcSoma(num1, num2){ //Função com paramatros
    console.log(num1 + num2)
}

funcSoma(5,5) //Invocanto a função com os argumentos

//Também é possível inserir um valor padrão para parâmetros, que será ignorado caso a função receba um esse parâmetro quando for chamada.
const myName = 'Gregory'
function sayMyName(name = myName){ //É permitido inserir o valor padrão através de uma variável ou inserindo o valor diretamente.
    console.log(`Olá ${name}!`)
}
sayMyName()