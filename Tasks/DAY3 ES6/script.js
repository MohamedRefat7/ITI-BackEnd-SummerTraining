////////////////////////  A  //////////////////////////

// function* fibonacciGenerator(elements) {
//   let a = 0;
//   let b = 1;
//   let series = [a, b];

//   for (let i = 0; i < elements; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//     series.push(c);
//   }

//   for (let i = 0; i < series.length; i++) {
//     yield series[i];
//   }
// }

// let fibonacciSeries = fibonacciGenerator(6);

// for (let num of fibonacciSeries) {
//   console.log(num);
// }

//////////////////////////// B ////////////////////////////////

// function* fibonacciGenerator(maxNum) {
//   let a = 0;
//   let b = 1;
//   let series = [a, b];

//   while (a + b <= maxNum) {
//     let c = a + b;
//     a = b;
//     b = c;
//     series.push(c);
//   }

//   for (let i = 0; i < series.length; i++) {
//     yield series[i];
//   }
// }

// let fibonacciSeries = fibonacciGenerator(6);

// for (let num of fibonacciSeries) {
//   console.log(num);
// }

////////////////////////////////// 3 ////////////////////////////////////

// let obj = {
//   firstname: "mohamed",
//   age: 21,
// };
// function* object() {
//   var keys = Object.keys(this);
//   for (let i = 0; i < keys.length; i++) {
//     let value = this[keys[i]];
//     yield [keys[i], value];
//   }
// }
// obj[Symbol.iterator] = object; // make object iterable
// for (const it of obj) {
//   console.log(it);
// }
