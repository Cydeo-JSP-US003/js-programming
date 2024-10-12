let school = "CYDEO SCHOOL";

console.log(typeof school);

console.log(school.length);

console.log(school.charAt(1));

console.log(school[1]);

console.log(school[school.length-1]);

console.log("---------------------------------------");


school = school.toLowerCase(); //'cydeo school'

console.log(school);

console.log("---------------------------------------");

let word1 = "JavaScript";
let word2 = "javaScript";

console.log( word1 === word2);
console.log(word1.toLowerCase() === word2.toLowerCase() );

console.log("---------------------------------------");

let x = "Python Python";

//x = x.replace("Python", "JavaScript"); // replaces the first matching
x = x.replace(/Python/g, "JavaScript"); // g is the global flag 

console.log(x);


console.log("---------------------------------------");

let str = "ABCDEFGHI1234567JKLMN098756OPQRST123567UVW";

let letters = str.replace(/\d/g, "");

console.log(letters);


console.log("---------------------------------------");

let email = "muhtar.cydeoschool@gmail.com";

let domain = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));

console.log(domain);

console.log(email.includes("hotmail"));

console.log(email.endsWith("gmail.com"));

console.log("---------------------------------------");

let studentName = "Hasan";

let studentAge = 30;

console.log("Student's name is: " + studentName + ", and student's age is " + studentAge + " years old");


console.log(`Student's name is ${studentName}, and student's age is ${studentAge} years old`);

console.log("---------------------------------------");

let course = "Playwright automation";

for (let index = 0; index < course.length; index++) {
    
    console.log(course[index]);
    
}

