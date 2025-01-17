/////////////////////// 1 ////////////////////////////////////////////
// const galleryItems = document.querySelectorAll(".gallery-item");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// const slideshowBtn = document.querySelector(".slideshow");
// let intervalId;

// function nextItem() {
//   const currentItem = document.querySelector(".active");
//   currentItem.classList.remove("active");
//   let thenextItem = currentItem.nextElementSibling;
//   if (!thenextItem) {
//     thenextItem = galleryItems[0];
//   }
//   thenextItem.classList.add("active");
// }

// function prevItem() {
//   const currentItem = document.querySelector(".active");
//   currentItem.classList.remove("active");
//   let theprevItem = currentItem.previousElementSibling;
//   if (!theprevItem) {
//     theprevItem = galleryItems[galleryItems.length - 1];
//   }
//   theprevItem.classList.add("active");
// }

// function startSlideshow() {
//   intervalId = setInterval(() => {
//     nextItem();
//   }, 2000);
// }

// function stopSlideshow() {
//   clearInterval(intervalId);
// }

// prevBtn.addEventListener("click", prevItem);
// nextBtn.addEventListener("click", nextItem);
// slideshowBtn.addEventListener("click", () => {
//   if (intervalId) {
//     stopSlideshow();
//   } else {
//     startSlideshow();
//   }
// });

// galleryItems[0].classList.add("active");
////////////////////////// 2 ////////////////////////////////
// function validateForm() {
//   var name = document.forms["userForm"]["name"].value;
//   var mobile = document.forms["userForm"]["mobile"].value;
//   var gender = document.forms["userForm"]["gender"].value;
//   var email = document.forms["userForm"]["email"].value;

//   // Validate name (required field)
//   if (name == "") {
//     alert("Name must be filled out");
//     return false;
//   }

//   // Validate mobile number (required field and numeric value)
//   if (mobile == "" || !validateMobile(mobile)) {
//     alert("Mobile number must be filled out with numeric value");
//     return false;
//   }

//   // Validate gender (required field)
//   if (gender == "") {
//     alert("Gender must be selected");
//     return false;
//   }

//   // Validate email address (required field and valid format)
//   if (email == "" || !validateEmail(email)) {
//     alert("Email address must be filled out with valid format");
//     return false;
//   }
// }

// function validateEmail(email) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }

/////////////////////// 3 //////////////////////////////
// function showTypingMessage(message, duration) {
//   const childWindow = window.open("", "", "width=300,height=200");

//   const messageElement = document.createElement("p");
//   messageElement.textContent = message;

//   childWindow.document.body.appendChild(messageElement);

//   setTimeout(() => {
//     childWindow.close();
//   }, duration);
// }

// showTypingMessage("Please wait for three seconds...", 3000);
