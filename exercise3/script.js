const input = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const resultsDiv = document.querySelector("#results-div");

function isValidUSPhoneNumber(input) {
  const regex = /^(?:\+?1[-. ]?)?(?:\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{4}$/;

  // Check if input matches the regex pattern
  if (!regex.test(input)) {
    return false;
  }

  // Check if area code is provided
  if (!/\d{3}/.test(input)) {
    return false;
  }

  // If country code is provided, confirm that it's 1
  if (input.startsWith("+1") && input.length !== 12) {
    return false;
  }

  return true;
}

checkBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please provide a phone number");
  }
  if (isValidUSPhoneNumber(input.value)) {
    resultsDiv.textContent = `Valid US number: ${input.value}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${input.value}`;
  }
  input.value = "";
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
});
