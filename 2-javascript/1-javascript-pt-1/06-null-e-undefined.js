/* Objects
Null & Undefined -> São a ausencia de algum dado que, por algum motivo, não está sendo encontrado.

Null -> Quando o objeto (ou variável) é definido como vazio logo na sua criação.
Undefined -> Quando a informação não é encontrada (erro).

*/

const user = {
    nome:"Gregory",
    idade: 35,
    id: null
}


console.log("Exemplo de null: "+user.id)
console.log("Exemplo de undefined: "+user.altura)