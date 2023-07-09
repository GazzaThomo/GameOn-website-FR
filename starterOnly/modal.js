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
const content = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const confirmedFermer = document.querySelector(".confirmed--fermer");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  // content.style.animationName = "modalOpen";
  modalbg.style.display = "block";
}

//This part of the code can be refactored later
//close modal event
modalbg.addEventListener("click", closeModalAvecXouBg);
modalCloseBtn.addEventListener("click", closeModalAvecXouBg);
document.addEventListener("keydown", closeModalEscape);
confirmedFermer.addEventListener("click", closeModal);

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
  content.style.animationName = "modalClose";
  setTimeout(function () {
    modalbg.style.display = "none";
    content.style.animationName = "modalOpen";
  }, 800);
}

//Form submit
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const birthDate = document.getElementById("birthdate");
  const numberOfTournements = document.getElementById("quantity");
  const location = document.querySelectorAll("input[type=radio]");
  const conditionsCheckbox = document.getElementById("checkbox1");
  const formHeight = document.querySelector("form").clientHeight;
  try {
    validateFirstName(firstName);
    validateLastName(lastName);
    validateEmail(email);
    validateNumberOfTournements(numberOfTournements);
    validateRadioButtons(location);
    validateConditions(conditionsCheckbox);
    formConfirmed(formHeight);
  } catch (error) {
    console.log("une erreur est survenue : " + error.message);
  }
});

function formConfirmed(formHeight) {
  let form = document.querySelector("form");
  let success = document.querySelector(".confirmed");

  success.style.height = formHeight + "px";
  form.style.display = "none";
  success.style.display = "flex";
}
