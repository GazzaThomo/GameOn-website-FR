//We use these functions to validate all the parameters in the formula when submitting

function validateFirstName(firstName) {
  if (firstName.value.length < 2) {
    throw new Error("Le prénom doit faire 2 caractères ou plus !");
  }
}

function validateLastName(lastName) {
  if (lastName.value.length < 2) {
    throw new Error("Le nom de famille doit faire 2 caractères ou plus !");
  }
}

function validateEmail(email) {
  const emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
  let emailValidation = emailRegex.test(email.value);
  console.log(emailValidation);
  if (!emailValidation) {
    throw new Error("L'email n'est pas valide");
  }
}

function validateNumberOfTournements(numberOfTournements) {
  if (typeof numberOfTournements !== "number") {
    throw new Error("Le nombre de tournois doit être un nombre !");
  }
}

function validateRadioButtons(radioButtons) {}

function validateConditions(conditionsCheckbox) {}
