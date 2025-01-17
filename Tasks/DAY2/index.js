//////////////////// 1 ////////////////////////////////
// function isPalindrome(str) {
//   var temp = str.split('').reverse().join('');
//   return str === temp ? 'Is Palindrome' : 'Is not Palindrome';
// }
// var str = prompt('Enter a string.');
// var isCaseSensitive = prompt(
//   'Do you want to consider case sensitivity  (yes/no)?'
// ).toLocaleLowerCase();

// isCaseSensitive === 'yes'
//   ? document.write(`<h1>${isPalindrome(str)}</h1>`)
//   : document.write(`<h1>${isPalindrome(str.toLocaleLowerCase())}</h1>`);

///////////////// 1.2 /////////////////////////////
// function isValidText(name) {
//   return !isFinite(name);
// }
// var str;
// do {
//   str = prompt('Enter a string.');
// } while (!isValidText(str));
// console.log(
//   `The number of "e" characters in the string is : ${str.split('e').length - 1}`
// );

///////////////////////////// 1.3 ///////////////////////////////

// let user = prompt('Enter Your Name: ');
// const userReg = /^[a-zA-Z]+$/;
// while (!userReg.test(user)) {
//   user = prompt('enter name again');
// }
// let email = prompt('enter your email: ');
// const emailReg =
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// while (!emailReg.test(email)) {
//   email = prompt('enter your email again');
// }
// let mobile = prompt('enter your number: ');
// const mobileReg = /^01[0125][0-9]{8}$/;
// while (!mobileReg.test(mobile)) {
//   mobile = prompt('your number again');
// }
// console.log(`your name is : ${user}`);
// console.log(`your email is : ${email}`);
// console.log(`your mobile is : ${mobile}`);

///////////////////////////// 2 /////////////////////////////////

// function CircleAreaAndSquareRoot() {
//   var radius = prompt("Enter the value of the circle's radius:");
//   if (isNaN(radius)) {
//     alert('Invalid input. Please enter a valid number.');
//     return;
//   }
//   var area = Math.PI * Math.pow(radius, 2);
//   var value = prompt('Enter another value:');
//   if (isNaN(value)) {
//     alert('Invalid input. Please enter a valid number.');
//     return;
//   }
//   var squareRoot = Math.sqrt(value);
//   alert('The area of the circle is: ' + area.toFixed(2));
//   alert('The square root of the value is: ' + squareRoot.toFixed(2));
// }
// CircleAreaAndSquareRoot();

///////////////// 3.1 ////////////////////////////////

// function mathematics() {
//   let numbers = [];
//   for (let i = 0; i < 3; i++) {
//     let number = prompt(`Enter number ${i + 1}:`);
//     numbers.push(parseFloat(number));
//   }
//   if (numbers.some(isNaN)) {
//     console.log('wrong numbers');
//     return;
//   }
//   let sum = numbers.reduce((acc, curr) => acc + curr);
//   let product = numbers.reduce((acc, curr) => acc * curr);
//   let quotient = numbers.reduce((acc, curr) => acc / curr);
//   return {
//     sum: sum,
//     product: product,
//     quotient: quotient,
//   };
// }
// let result = mathematics();
// if (result) {
//   console.log('Sum:', result.sum);
//   console.log('Product:', result.product);
//   console.log('Quotient:', result.quotient);
// }

///////////////// 3.2 /////////////////////////////////

// function sortArray() {
//   let elements = [];
//   for (let i = 0; i < 5; i++) {
//     let element = prompt(`Enter element ${i + 1}:`);
//     elements.push(element);
//   }
//   let ascendingOrder = elements.slice().sort();
//   let descendingOrder = elements.slice().sort((a, b) => b.localeCompare(a));
//   console.log('The Numbers You Entered Is ', elements);
//   console.log('Ascending Order:', ascendingOrder);
//   console.log('Descending Order:', descendingOrder);
// }
// sortArray();
