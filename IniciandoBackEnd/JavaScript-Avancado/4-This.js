/*
this 

no Javascript, o this faz referência:
    Node    => module.exports 
    Web     => window

Escopo:
    => Global → Quando começamos a escrever nossa aplicação
        No contexto global, o this faz referência ao objeto global,
        que é o objeto window no navegador de internet ou ao objeto global no Node.js
    
    => Local → Por exemplo dentro de uma função
*/
const objts = require('./4-objAndFuncs')

const person ={
    name: 'Gregory',
    age: 34,
    talk: function(){
        console.log(this.name)
    }
}

console.log(objts.welcome(person.name))
person.talk()