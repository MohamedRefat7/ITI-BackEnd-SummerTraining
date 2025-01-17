//////////////////////////// 1 //////////////////////////////

// class Rectangle {
//   static count = 0;
//   constructor(width, height) {
//     if (typeof width !== "number" || typeof height !== "number") {
//       console.log("Invalid input. width and height must be numbers.");
//     }
//     Rectangle.count++;
//     this.width = width;
//     this.height = height;
//   }
//   toString() {
//     const area = this.calculateArea();
//     const perimeter = this.calculatePerimeter();

//     return `Rectangle---> width=${this.width}, height=${this.height}, area=${area}, perimeter=${perimeter}`;
//   }

//   calculateArea() {
//     return this.width * this.height;
//   }

//   calculatePerimeter() {
//     return 2 * (this.width + this.height);
//   }

//   static getCount() {
//     return Rectangle.count;
//   }
// }
// const rectangle1 = new Rectangle(2, 5);
// console.log(rectangle1.toString());
// const rectangle2 = new Rectangle(8, 9);
// console.log(rectangle2.toString());
// const count = Rectangle.getCount();
// console.log(`Number of created objects: ${count}`);

//////////////////////////// 2 /////////////////////////////////

// class Shape {
//   constructor() {
//     if (new.target === Shape) {
//       console.log(
//         "Cant create an instance of Shape. Only subclasses are allowed."
//       );
//     }
//   }
// }
// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
// }
// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//   }
// }
// const rectangle = new Rectangle(2, 5);
// console.log(`Rectangle area: ${rectangle.getArea()}`);
// const square = new Square(5);
// console.log(`Square area: ${square.getArea()}`);

////////////////////// ES6 ///////////////////////

/////////////     1      ////////////////////

// function swapValues(value1, value2) {
//   [value1, value2] = [value2, value1];

//   return [value1, value2];
// }

// let value1 = 5;
// let value2 = 10;

// console.log(`Before swap: value1 = ${value1}, value2 = ${value2}`);
// [value1, value2] = swapValues(value1, value2);
// console.log(`After swap: value1 = ${value1}, value2 = ${value2}`);

////////////////////////// 2 /////////////////////////////

// function findMinMax(...numbers) {
//   if (!Array.isArray(numbers) || numbers.length === 0) {
//     console.log(
//       "Invalid input. The input must be an array with at least one element."
//     );
//   }
//   const min = Math.min(...numbers);
//   const max = Math.max(...numbers);
//   return { min, max };
// }

// const numbers = [1, 3, 20, 17, 39];
// const result = findMinMax(...numbers);
// console.log(`Minimum value: ${result.min}`);
// console.log(`Maximum value: ${result.max}`);

///////////////////////// 3 //////////////////////////////

// function checkArrayElements(array) {
//   if (!Array.isArray(array)) {
//     console.log("Invalid input. The parameter must be an array.");
//   }

//   const ElementString = array.every((element) => typeof element === "string");
//   const ElementStartsWithA = array.some((element) => element.startsWith("a"));
//   return ElementString && ElementStartsWithA;
// }

// const fruits = ["apple", "strawberry", "banana", "orange", "mango"];
// const StringAndStartsWithA = checkArrayElements(fruits);
// console.log(`Every element in the array is a string: ${StringAndStartsWithA}`);
// function filterFruits(fruits) {
//   if (!Array.isArray(fruits)) {
//     console.log("Invalid input. The parameter must be an array.");
//   }

//   return fruits.filter(
//     (fruit) => fruit.startsWith("a") || fruit.startsWith("s")
//   );
// }

// const filteredFruits = filterFruits(fruits);
// filteredFruits.forEach((fruit) => console.log(fruit));
