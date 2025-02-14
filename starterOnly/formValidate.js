//We use these functions to validate all the parameters in the formula when submitting

function validateFirstName(firstName) {
  if (firstName.value.trim().length < 2) {
    let errorMessage = "Le prénom doit faire au minimum 2 caractères !";
    addErrorCssToHtml(firstName, errorMessage);
    return false;
  } else {
    removeErrorCssToHtml(firstName);
    return true;
  }
}

function validateLastName(lastName) {
  if (lastName.value.trim().length < 2) {
    let errorMessage = "Le nom de famille doit faire au minimum 2 caractères !";
    addErrorCssToHtml(lastName, errorMessage);
    return false;
  } else {
    removeErrorCssToHtml(lastName);
    return true;
  }
}

function validateEmail(email) {
  const emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
  let emailValidation = emailRegex.test(email.value);
  if (!emailValidation) {
    let errorMessage = "L'adresse mail n'est pas valide !";
    addErrorCssToHtml(email, errorMessage);
    return false;
  } else {
    removeErrorCssToHtml(email);
    return true;
  }
}

function validateBirthdate(birthDate) {
  let dob = birthDate.value;

  //create date objects
  let dobDate = new Date(dob);
  let currentDate = new Date();

  //check if dob is valid date and not in future
  if (isNaN(dobDate.getTime()) || dobDate > currentDate) {
    let errorMessage = "Veuillez rentrer une date de naissance valide";
    addErrorCssToHtml(birthDate, errorMessage);
    return false;
  } else {
    removeErrorCssToHtml(birthDate);
    return true;
  }
}

function validateNumberOfTournements(numberOfTournements) {
  let stringNumberRegex = new RegExp("^\\d+$");
  let numberValidation = stringNumberRegex.test(numberOfTournements.value);
  if (!numberValidation) {
    let errorMessage = "Vous devez rentrer un nombre entier !";
    addErrorCssToHtml(numberOfTournements, errorMessage);
    return false;
  } else {
    removeErrorCssToHtml(numberOfTournements);
    return true;
  }
}

function validateRadioButtons(location) {
  let isValid = false;
  let errorMessage = "Vous devez choisir au moins une ville dans la liste";
  for (let i = 0; i < location.length; i++) {
    if (validateCheckboxAndRadio(location[i], errorMessage)) {
      isValid = true;
      break;
    }
  }
  return isValid;
}

function validateConditions(conditionsCheckbox) {
  return validateCheckboxAndRadio(
    conditionsCheckbox,
    "Vous devez accepter les CGU."
  );
}

// DRY functions! add to css doesn't apply to the radio buttons or checkbox
function addErrorCssToHtml(node, errorMessage) {
  let parentNode = node.parentNode; // get parent of input data
  parentNode.setAttribute("data-error", errorMessage);
  parentNode.setAttribute("data-error-visible", "true");
}

function removeErrorCssToHtml(node) {
  let parentNode = node.parentNode; // get parent of input data
  parentNode.setAttribute("data-error", "");
  parentNode.setAttribute("data-error-visible", "false");
}

//For radio buttons and CGU checkbox only
function validateCheckboxAndRadio(node, errorMessage) {
  let firstParentNodeElement = node.parentNode;
  let secondParentNodeElement = firstParentNodeElement.parentNode;

  if (node.checked) {
    removeErrorCssToHtml(node);
    secondParentNodeElement.setAttribute("data-error", "");
    secondParentNodeElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    firstParentNodeElement.setAttribute("data-error-visible", "true");
    secondParentNodeElement.setAttribute("data-error", errorMessage);
    secondParentNodeElement.setAttribute("data-error-visible", "true");
    return false;
  }
}
