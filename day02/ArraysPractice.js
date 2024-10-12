let elements = ["Java", "Python", 12, 13, 14, true, false];

console.log(elements);

console.log("-------------------------------------");

let students = ["Kibriyo", "Nessar", "Daur", "Aysen"];

console.log(students);
console.log(students.length);

students.push("Muhtar");
students.push("Kasim");

console.log(students);
console.log(students.length);

students[students.length -2] = "Mehmet";

console.log(students);

console.log(students[0]);

console.log("--------------------------------------");

for(let each of students){
    console.log(each);
}

console.log("--------------------------------------");

for( let s of "CYDEO"){
    console.log(s);
}

console.log("------------------------------------");

console.log(students);

students.unshift("Ahmed");
students.unshift("Ahmed");
students.unshift("Ahmed");

console.log(students);

students.splice(1, 2);

console.log(students);

students.shift();

console.log(students);

students.pop();

console.log(students);
