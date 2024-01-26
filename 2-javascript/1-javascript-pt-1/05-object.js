/* Objects

propriedades: valor

tipos de dados permitidos:
String -> Texto
Number - Número
Boolean -> Verdadeiro ou Falso
Object -> Objeto
Null & Undefined

*/

const person = {
    name:"Gregory",
    age: 33,
    sex: "male",
    heigth: 1.70,
    occupation: "Developer",
    address:{
        street:"Rua a tal da rua",
        number: 13,
        country:"Brasil"
    }
}


console.log("O nome do brabo é "+person.name+" e mora no país "+person.address.country)