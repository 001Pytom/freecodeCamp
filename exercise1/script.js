const textInput = document.getElementById("text-input");
const checkbtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(input) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  // Compare the cleaned input with its reverse
  isTrue = cleanedInput === cleanedInput.split("").reverse().join("");
  isTrue
    ? (result.textContent = `${input} is palindrome`)
    : (result.textContent = `${input} is not a palindrome`);
}

checkbtn.addEventListener("click", () => {
  result.style.display = "block";
  if (textInput.value === "") {
    alert("Please input a value");
  } else {
    isPalindrome(textInput.value);
  }
});
