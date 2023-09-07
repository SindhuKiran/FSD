class person{
    constructor(name, age, gender)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    
    eat(){
        console.log(this.name +" "+"is eating")
    }
    walk(){
        console.log(this.name +" "+ 'is walking')
    }

}

let person1 = new person('Sindhu', 30, 'Female')
let person2 = new person('Bhanu', 32, 'Male')
let person3 = new person('Nayana', 1.5, 'Female')

console.log(person1)
person1.eat();
person3.walk()