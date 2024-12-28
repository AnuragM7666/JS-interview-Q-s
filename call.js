//call() method calls a func with a given 'this' value and arguments provided one by one

const person = {
    firstName: "Anurag", 
    lastName: "Mankapure",
    fullName: function (city, country) {
        return this.firstName + ' ' + this.lastName + " " + city + " " + country;
    }
}

const person2 = {
    firstName: 'Akarsh',
    lastName: 'Vante'
}

const person3 = {
    firstName: 'Chinmay',
    lastName: 'Yalgude'
}

const p4 = {
    firstName: 'Amit',
    lastName: 'Kaka'
}

console.log(person.fullName("Mumbai", "India")); 
console.log(person.fullName.call(person2, "Pune", "India"));

//Apply() method:- similar to call() but arguments are passed as an array
console.log(person.fullName.apply(person3, ["Delhi", "India"])); 

//Bind() method:- it creates a new func with specific 'this' value & optional arguments. The new func can be invoked later.
//Basically, an object borrows a method from another object.
const p4FullName = person.fullName.bind(p4, "Banglore", "India");
console.log(p4FullName());  


