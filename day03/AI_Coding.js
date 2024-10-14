// create a for loop that starts from 1 and ends at 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("----------------------------------------------------------------");

// Create an array of String and add 10 student names (first and last) to it
let students = [
  "John Doe",
  "Jane Smith",
  "Michael Johnson",
  "Sarah Davis",
  "Emily Brown",
  "Michael Wilson",
  "David Lee",
  "Daniel Johnson",
  "Olivia Thompson",
  "Sophia Williams",
];

// display all the student anmes on the console
for (let student of students) {
  console.log(student);
}

console.log("----------------------------------------------------------------");
// set the first student name to Muhtar and last student name to Kuzzat
students[0] = "Muhtar";
students[students.length - 1] = "Kuzzat";
console.log(students);

console.log("----------------------------------------------------------------");

// display all the elments of the students array in reversed order
for (let i = students.length - 1; i >= 0; i--) {
  console.log(students[i]);
}

console.log("----------------------------------------------------------------");

let email = "CydeoSchool@yahoo.com";

// check if the email address contains '@gmail.com'
if (email.includes("@gmail.com")) {
  console.log("Email is valid");
} else {
  console.log("Email is invalid");
}

// use string manipulation to retrive the domain of the mail
let domain = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));
console.log("Domain: " + domain);

console.log("----------------------------------------------------------------");

let numbers = [100, 200, 300, 400, 5, 6, 7, 8, 9, 0, 11, 10];

// write a program that can display the maximum and minimum numbers from the numbers array. do not use any build-in sort functions
let max = numbers[0];
let min = numbers[0];

for (let number of numbers) {
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
}

console.log("Maximum number: " + max);
console.log("Minimum number: " + min);

console.log("----------------------------------------------------------------");

let nums = [5, 3, 8, 2, 1, 7, 4, 6, 0, 9];

// write a program that can sort the nums array in ascending order. DO not use any build-in sort functions
for (let i = 0; i < nums.length - 1; i++) {
  for (let j = 0; j < nums.length - i - 1; j++) {
    if (nums[j] > nums[j + 1]) {
      let temp = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = temp;
    }
  }
}

console.log(`Sorted array in ascending order: ${nums}`);
