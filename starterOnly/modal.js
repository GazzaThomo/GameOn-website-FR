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
const form = document.querySelector("form");
const success = document.querySelector(".confirmed");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  success.style.display = "none";
  form.style.display = "block";
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

//modal close function
function closeModal() {
  //change keyframe effect so the modal goes back up smooth
  content.style.animationName = "modalClose";

  //reseting the parameter of the original keyframe. Use timeout with same timez as keyframe duration so the modal doesn't hide prematurely
  setTimeout(function () {
    modalbg.style.display = "none";
    content.style.animationName = "modalOpen";
  }, 800);
}

//Form submit function
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

  // create a boolean to handle if the form is valid or not
  let isValidForm = true;

  //
  if (!validateFirstName(firstName)) isValidForm = false;
  if (!validateLastName(lastName)) isValidForm = false;
  if (!validateEmail(email)) isValidForm = false;
  if (!validateBirthdate(birthDate)) isValidForm = false;
  if (!validateNumberOfTournements(numberOfTournements)) isValidForm = false;
  if (!validateRadioButtons(location)) isValidForm = false;
  if (!validateConditions(conditionsCheckbox)) isValidForm = false;

  if (isValidForm) {
    formConfirmed(formHeight, e);
  } else {
    console.log("There are some errors in the form.");
  }
});

//function for hiding the form and showing the completed page on the modal
function formConfirmed(formHeight, e) {
  success.style.height = formHeight + "px";
  form.style.display = "none";
  success.style.display = "flex";
  e.target.reset();
}
