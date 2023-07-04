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
  if (!emailValidation) {
    throw new Error("L'email n'est pas valide");
  }
}

function validateNumberOfTournements(numberOfTournements) {
  let stringNumberRegex = new RegExp("^[0-9]+$");
  let numberValidation = stringNumberRegex.test(numberOfTournements.value);
  if (!numberValidation) {
    throw new Error("Le nombre de tournois doit être un nombre !");
  }
}

function validateRadioButtons(location) {
  for (let i = 0; i < location.length; i++) {
    if (location[i].checked) {
      return true;
    }
  }
  throw new Error("Il faut sélectionner au moins une ville !");
}

function validateConditions(conditionsCheckbox) {
  if (!conditionsCheckbox.checked) {
    throw new Error(`Vous devez accepter les conditions d'utilisation`);
  }
}
