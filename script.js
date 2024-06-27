import { buttonClick } from "./button";

// Examining the document
// console.dir(document);

// first BOM property/method
innerWidth;
console.log(innerWidth);

// creating variables
const header = document.getElementsByClassName("header");
const intro = document.getElementsByTagName("p");
const donations = document.getElementById("donation-forms");
const checkboxes = document.querySelector(".checkboxes");
const checkbox = document.getElementsByClassName("checkbox");
const contact = document.getElementById("contact-info");
const moniker = document.getElementById("name");
const number = document.getElementsByClassName("phone-number");
const email = document.getElementsByClassName("email");

// creating new element using createElement
const bagpipes = document.createElement("label");
// using prepend to add new element to checboxes div
checkboxes.prepend(bagpipes);
// adding class to new label
bagpipes.className = "bagpipes";
// navigating between parent-child relationship
checkboxes.firstElementChild.textContent = "Bagpipes";

// iterating over checkboxes and changing color attempt 1
// checkbox.addEventListener("change", function () {
//   if (checkboxes.checked) {
//     document.checkboxes.input.style.color = "purple";
//   }
// });

// second attempt iterating over checkboxes w/ event listener and changing text color
// for (let i = 0; i < checkboxes.clientHeight; i++) {
//   checkboxes[i].addEventListener("change", (evt) => {
//     if (evt.target.checked) {
//       checkboxes.input.style.color = "purple";
//     }
//   });
// }

// third attempt iterating over checkboxes w/ event listener and changing text color with Constance's help (thanks Constance!)
// let i = 0;
// checkbox[i].addEventListener("click", (evt) => {
//   //   if (evt.target.checked === true) {
//   //     checkbox.input.style.color = "purple";
//   //   }
//   for (i = 0; i < checkbox.length; i++) {
//     checkbox[i].style.color = "purple";
//     console.log(checkbox[0]);
//   }
// });

// Final attempt - event listener 1, iterates over the checkboxes, and modifies the style and at least one attribute
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("click", (evt) => {
    if (evt.target.checked === true) {
      checkbox[i].style.color = "purple";
      console.log(checkbox[i]);
      //   checkbox[i].innerHTML = "THANKS!!!";
    }
  });
}

// attempting to change the placeholder text of name
// for (let i = 0; i < monikerPlaceholder.length; i++) {
//   monikerPlaceholder[3].addEventListener("click", (evt) => {
//     if (evt.taregt.click === true) {
//       monikerPlaceholder[3].textContent = "Please enter your full name!";
//     }
//   });
// }

// thanks.addEventListener("click", (evt) => {
//   if (evt.target.click === true) {
//     thanks.textContent = "We really appreciate it!";
//   }
// });

// event listener and form validation for contact info
// contact.addEventListener("submit", validate);

// function validate(evt) {
//   moniker = validateName();
//   if (moniker === false) {
//     evt = false;
//     return false;
//   }

//   number = validatePhone();
//   if (number === false) {
//     evt = false;
//     return false;
//   }

//   email = validateEmail();
//   if (email === false) {
//     evt = false;
//     return false;
//   }

//   alert(`Thanks for your donation, ${moniker}`);

//   return true;
// }

// Name validation
// function validate() {
//   if (moniker.value === "") {
//     alert("Please provide a name");
//     moniker.focus();
//     return false;
//   }
//   return moniker.value;
// }

// Trying to change text of name
// const changeText = moniker;
// changeText.addEventListener("click", function () {
//   changeText.textContent = "Your name here please!";
// });

// Trying to change text of name
// const namePlaceholder = moniker.placeholder;

// namePlaceholder.addEventListener("click", (evt) => {
//   if (evt.target === moniker) {
//     namePlaceholder.style.textContent = "Please enter your name";
//   }
// });

// Validate phone number
// const validateNumber = (number) => {
//     const reg = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$;
//     return reg.toLocaleString(number)
// }
// console.log(validateNumber)

// Second event listener that checks form validation and modifies the text content

// Form validation - I really thought this would work, followed the class example
// function validatePhone() {
//   if (number.value === "") {
//     alert("Phone number must be filled out");
//     number.focus();
//     return false;
//   }
//   return number.value;
// }

buttonClick();

// Using clone node to clone the first checkbox index
const banjoItem = checkbox[0];
const banjoCopy = banjoItem.cloneNode(true);
console.log(banjoCopy);

// I am all done and I think that should be every one of the requirements!
