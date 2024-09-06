class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person = new Person('Bob', 30);
console.log(person.introduce());  // Output: Hi, my name is Bob and I am 30 years old.
