//Prototypes allow objects to inherit properties and methods from other objects
//'this' keyword refers to context in which a func is executed. It's value depends on how func is called.

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () { //greet is a prototype that extends func Person
    return `Hi! My name is ${this.name}`
}

const person = new Person("Anurag");
console.log(person.greet());