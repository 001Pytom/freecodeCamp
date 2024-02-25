const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;
let cleanInputString = (str) => {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
};

let isInvalidInput = (str) => {
  const regex = /\d+e\d+/i;
  return str.match(regex);
};

// allow users to add entries
let addEntry = () => {
  let targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  let entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  let HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text"  id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name">
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input type="number" min = "0"  id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories">
  `;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
};

let calculateCalories = (e) => {
  e.preventDefault();
  isError = false;

  let breakfastNumberInputs = document.querySelectorAll(
    "#breakfast input[type=number]"
  );
  let lunchNumberInputs = document.querySelectorAll(
    "#lunch input[type=number]"
  );
  let dinnerNumberInputs = document.querySelectorAll(
    "#dinner input[type=number]"
  );
  let snacksNumberInputs = document.querySelectorAll(
    "#snacks input[type=number]"
  );
  let exerciseNumberInputs = document.querySelectorAll(
    "#exercise input[type=number]"
  );
  let breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  let lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  let dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  let snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  let exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

  let budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
  if (isError) {
    return;
  }

  let consumedCalories =
    breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  let remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
  let surplusOrDeficit = (
    remainingCalories < 0 ? "Surplus" : "Deficit"
  ).toLowerCase();
  output.innerHTML = `<span class="surplusOrDeficit.toLowerCase()"></span>`;
};

let getCaloriesFromInputs = (list) => {
  let calories = 0;
  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);
    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
  return calories;
};

addEntryButton.addEventListener("click", addEntry);
