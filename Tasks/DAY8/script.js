//////////////////////////// 1 ////////////////////////////////
// class Rectangle {
//   constructor(width, height) {
//     if (typeof width !== "number" || typeof height !== "number") {
//       throw new Error("Invalid input. Both parameters must be numbers.");
//     }

//     this.width = width;
//     this.height = height;
//   }

//   calculateArea() {
//     return this.width * this.height;
//   }

//   calculatePerimeter() {
//     return 2 * (this.width + this.height);
//   }

//   displayInfo() {
//     document.write(
//       `Rectangle: width = ${this.width} , height = ${this.height}`
//     );
//     document.write(` Area: ${this.calculateArea()} `);
//     document.write(` Perimeter: ${this.calculatePerimeter()}`);
//   }
// }

// try {
//   const rectangle = new Rectangle(2, 3);
//   rectangle.displayInfo();
// } catch (error) {
//   console.error(error.message);
// }

////////////////////////////// 2 /////////////////////////////////////

// var input = document.getElementById("userName");
// var email = document.getElementById("userEmail");
// var add = document.getElementById("userAddress");
// var genders = document.getElementById("userGender");

// function Save() {
//   var date = new Date();
//   date.setMonth();
//   document.cookie = "userName = " + input.value + "; expires=" + date;
//   document.cookie = "userEmail = " + email.value + "; expires=" + date;
//   document.cookie = "userAddress = " + add.value + "; expires=" + date;
//   document.cookie = "userGender = " + genders.value + "; expires=" + date;
// }
// var div = document.getElementsByTagName("div")[0];

// function getcookie() {
//   var cookie = document.cookie;
//   var allcookie = [];
//   var splitcookie = cookie.split(";");
//   console.log(splitcookie);
//   for (var i = 0; i < splitcookie.length; i++) {
//     allcookie[splitcookie[i].split("=")[0].trim()] =
//       splitcookie[i].split("=")[1];
//   }
//   return allcookie;
// }

// function getinfo() {
//   var cookie = getcookie();
//   var h1 = document.createElement("div");
//   var Name = cookie["userName"];
//   var email = cookie["userEmail"];
//   var addr = cookie["userAddress"];
//   var gender = cookie["userGender"];
//   var txt = document.createTextNode(
//     "Welcome " +
//       " " +
//       Name +
//       " " +
//       "Your Email" +
//       " " +
//       email +
//       " " +
//       "Your Address" +
//       " " +
//       addr +
//       " " +
//       " Your Gender " +
//       " " +
//       gender
//   );
//   h1.append(txt);
//   document.body.appendChild(h1);
// }
// function ClearCookie() {
//   var cookie = getcookie();
//   for (var i in cookie) {
//     document.cookie = i + "=;expires=19/9/2024";
//   }
// }
