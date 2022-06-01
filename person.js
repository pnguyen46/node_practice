// const person = {
//     name: 'Tron',
//     age: 28
// }


// module.exports = person;


class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hey, My name is ${this.name} and I am ${this.age} year olds.`);
    }
}

module.exports = Person;