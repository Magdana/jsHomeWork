// 1 დავალება

const students = [];
students.push("nino", "giorgi", "mariami", "natia");
const reversedStudents = students.reverse();
console.log("reversed array of students: ", reversedStudents);

// 2 დავალება
const students1 = ["nino", "giorgi", "mariami", "natia"];
const studentsWithA = students1.filter((n) => n.includes("a"));
console.log("Students with 'a' in their name: ", studentsWithA);

// 3 დავალება

const persons = ["David", "Elene", "Teona", "Giorgi"];
const hasElene = persons.filter((n) => n.includes("Elene"));
if (hasElene != 0) {
  console.log("Elene is in the persons array");
} else {
  console.log("Elene is not in the persons array.");
}

// 4 დავალება

const numArray = [1, 7, 35, 15, 30];
const sortedArray = numArray.sort((a, b) => a - b);
console.log(sortedArray);

// 5 დავალება

const user = "admin";
const passCode = 12345;
const userAdmin = prompt("Enter your user");
const adminPasscode = prompt("Enter your password");
if (userAdmin === user && parseInt(adminPasscode) === passCode) {
  console.log("Login successful. Welcome!");
} else if (userAdmin !== user) {
  console.log("Incorrect username");
} else if (adminPasscode !== passCode) {
  console.log("Incorrect password");
} else {
  console.log("Login failed. Please try again.");
}

// 6 დავალება

const answer = prompt("What is your favorite fruit?");
const answerToLOwer = answer.toLowerCase();
switch (answerToLOwer) {
  case "apple":
    console.log("Apples are great for a quick snack!");
    break;
    g;
  case "banana":
    console.log("Bananas are full of potassium!");
    break;
  case "orange":
    console.log("Oranges are a great source of vitamin C!");
    break;
  default:
    console.log(
      "That's an interesting choice! I don't know much abou that fruit."
    );
}
