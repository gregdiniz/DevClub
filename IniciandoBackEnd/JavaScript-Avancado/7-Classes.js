/*
    Classes
*/

class Person{
    constructor(name, age){
        console.log(`Mi nomebre és ${name} y yo tengo ${age} años`)
        this.name = name
        this.age = age
    }
    talk(){
        console.log(`Hello my name is ${this.name} and I'm ${this.age}`)
    }

}

const newPerson = new Person("Gregory",34)
newPerson.talk()