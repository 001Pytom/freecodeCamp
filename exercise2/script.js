const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function decimalToRoman(num) {
  if (num < 1) {
    output.textContent = `Please enter a number greater than or equal to 1`;
    return;
  } else if (num > 3999) {
    output.textContent = `Please enter a number less than or equal to 3999`;
    return;
  }

  const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let roman = "";

  for (let i = 0; i < decimalValues.length; i++) {
    while (num >= decimalValues[i]) {
      roman += romanNumerals[i];
      num -= decimalValues[i];
    }
  }
  output.textContent = roman;
}

btn.addEventListener("click", () => {
  input.value === ""
    ? (output.textContent = `Please enter a valid number`)
    : decimalToRoman(input.value);
  input.value = "";
});
