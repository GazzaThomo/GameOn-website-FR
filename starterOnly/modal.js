function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//This part of the code can be refactored later
//close modal event
modalbg.addEventListener("click", closeModalAvecXouBg);
modalCloseBtn.addEventListener("click", closeModalAvecXouBg);
document.addEventListener("keydown", closeModalEscape);

//close modal on X click or if click is outside the content field
function closeModalAvecXouBg(e) {
  if (e.target === modalbg || e.target === modalCloseBtn) {
    closeModal();
  }
}

//for accessibility, if escape is pressed whilst modal is open.
function closeModalEscape(e) {
  const style = window.getComputedStyle(modalbg);
  if (style.display === "block" && e.key === "Escape") {
    closeModal();
  }
}

function closeModal() {
  modalbg.style.display = "none";
}

//Form submit
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const birthDate = document.getElementById("birthdate");
  const numberOfTournements = document.getElementById("quantity");
  const location = document.querySelectorAll("input[type=radio]");
  const conditionsCheckbox = document.getElementById("checkbox1");

  try {
    validateFirstName(firstName);
    validateLastName(lastName);
    validateEmail(email);
    validateNumberOfTournements(numberOfTournements);
    validateRadioButtons(location);
    validateConditions(conditionsCheckbox);
  } catch (error) {
    console.log("une erreur est survenue : " + error.message);
  }
});
