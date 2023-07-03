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
modalbg.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);
document.addEventListener("keydown", closeModalEscape);

//close modal on X click or if click is outside the content field
function closeModal(e) {
  console.log(e.target);
  if (e.target === modalbg || e.target === modalCloseBtn) {
    modalbg.style.display = "none";
  }
}

//for accessibility, if escape is pressed whilst modal is open.
function closeModalEscape(e) {
  const style = window.getComputedStyle(modalbg);
  if (style.display === "block" && e.key === "Escape") {
    modalbg.style.display = "none";
  }
}
