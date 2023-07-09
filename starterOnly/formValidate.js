//We use these functions to validate all the parameters in the formula when submitting

// function validateFirstName(firstName) {
//   if (firstName.value.length < 2) {
//     throw new Error("Le prénom doit faire 2 caractères ou plus !");
//   }
// }

function validateFirstName(firstName) {
  if (firstName.value.length < 2) {
    let errorMessage = "Le prénom doit faire au minimum 2 caractères !";
    addErrorCssToHtml(firstName, errorMessage);
    return;
  }
  removeErrorCssToHtml(firstName);
}

function validateLastName(lastName) {
  if (lastName.value.length < 2) {
    let errorMessage = "Le nom de famille doit faire au minimum 2 caractères !";
    addErrorCssToHtml(lastName, errorMessage);
    return;
  }
  removeErrorCssToHtml(lastName);
}

function validateEmail(email) {
  const emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
  let emailValidation = emailRegex.test(email.value);
  if (!emailValidation) {
    let errorMessage = "L'adresse mail n'est pas valide !";
    addErrorCssToHtml(email, errorMessage);
    return;
  }
  removeErrorCssToHtml(email);
}

function validateNumberOfTournements(numberOfTournements) {
  let stringNumberRegex = new RegExp("^\\d+$");
  let numberValidation = stringNumberRegex.test(numberOfTournements.value);
  if (!numberValidation) {
    let errorMessage = "Vous devez rentrer un nombre entier !";
    addErrorCssToHtml(numberOfTournements, errorMessage);
    return;
  }
  removeErrorCssToHtml(numberOfTournements);
}

function validateRadioButtons(location) {
  for (let i = 0; i < location.length; i++) {
    try {
      return validateCheckboxAndRadio(
        location[i],
        "Veuillez sélectionner au moins 1 ville parmi la liste."
      );
    } catch (e) {
      continue;
    }
  }
  throw new Error("Veuillez sélectionner au moins 1 ville parmi la liste.");
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
  throw new Error(errorMessage);
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
  }

  firstParentNodeElement.setAttribute("data-error-visible", "true");
  secondParentNodeElement.setAttribute("data-error", errorMessage);
  secondParentNodeElement.setAttribute("data-error-visible", "true");
  throw new Error(errorMessage);
}
