
class Employee{

    constructor(name = "Unknown", age = 18, salary = 30_000, jobTitle = "Unknown"){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.jobTitle = jobTitle;
    }

    work(){
        console.log(`${this.name} is working`);
    }

}


let employee1 = new Employee("James", 25, 100_000, "SDET");

/*
employee1.name = "James";
employee1.age = 25;
employee1.salary = 100_000;
employee1.jobTitle = "SDET";
*/

console.log(employee1);

let employee2 = new Employee("Breanna");

console.log(employee2);

employee1.work();
employee2.work();
