///////////////////////// 1 //////////////////////////////

// function getNumberInput() {
//   let userInput;
//   let number;

//   do {
//     userInput = prompt("Please enter a number:");
//     number = parseFloat(userInput);
//   } while (isNaN(number));

//   return number;
// }
// console.log(getNumberInput());

/////////////////////////// 2 ////////////////////////////

// const nameRegex = /^[A-Za-z\s]+$/;
// const ageRegex = /^\d+$/;
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// function validateForm(name, age, email) {
//   if (!nameRegex.test(name)) {
//     alert("Invalid name. Only alphabets and spaces are allowed.");
//     return false;
//   }
//   if (!ageRegex.test(age)) {
//     alert("Invalid age. Please enter a valid number.");
//     return false;
//   }
//   if (!emailRegex.test(email)) {
//     alert("Invalid email. Please enter a valid email address.");
//     return false;
//   }
//   return true;
// }
// function addUserToTable(name, age, email) {
//   const table = document.getElementById("userTable");
//   const tbody = table.getElementsByTagName("tbody")[0];
//   const newRow = tbody.insertRow();
//   const nameCell = newRow.insertCell();
//   const ageCell = newRow.insertCell();
//   const emailCell = newRow.insertCell();
//   nameCell.textContent = name;
//   ageCell.textContent = age;
//   emailCell.textContent = email;
// }
// function resetForm() {
//   document.getElementById("userForm").reset();
// }
// document
//   .getElementById("userForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const name = document.getElementById("name").value;
//     const age = document.getElementById("age").value;
//     const email = document.getElementById("email").value;
//     if (validateForm(name, age, email)) {
//       addUserToTable(name, age, email);
//       resetForm();
//     }
//   });

///////////////////////// 3 /////////////////////////////////
// const tips = [
//   "Always use 'const' or 'let' to declare variables instead of 'var'.",
//   "Use '===' for strict equality comparison instead of '=='.",
//   "Avoid using global variables to prevent polluting the global namespace.",
//   "Use arrow functions to write concise and clean code.",
//   "Remember to handle errors using try-catch blocks.",
// ];

// function displayRandomTip() {
//   const randomIndex = Math.floor(Math.random() * tips.length);
//   const randomTip = tips[randomIndex];
//   alert(randomTip);
// }

// const button = document.createElement("button");
// button.textContent = "Tip of the Day";
// button.addEventListener("click", displayRandomTip);

// document.body.appendChild(button);

////////////////// BOUNS ////////////////////////////////

// function alertAsciiCode() {
//   document.addEventListener("keydown", function (event) {
//     var asciiCode = event.keyCode || event.which;
//     alert("ASCII Code: " + asciiCode);
//   });
// }
// alertAsciiCode();
