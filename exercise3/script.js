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

// function checkCashRegister(price, cash, cid) {
//   let currencyUnit = {
//     PENNY: 0.01,
//     NICKEL: 0.05,
//     DIME: 0.1,
//     QUARTER: 0.25,
//     ONE: 1,
//     FIVE: 5,
//     TEN: 10,
//     TWENTY: 20,
//     "ONE HUNDRED": 100,
//   };
//   let changeDue = cash - price;
//   let totalCID = Number(
//     cid.reduce((sum, element) => sum + element[1], 0).toFixed(2)
//   );
//   if (totalCID < changeDue) {
//     return { Status: "INSUFFICIENT_FUNDS", change: {} };
//   } else if (totalCID == changeDue) {
//     return { Status: "CLOSED", change: cid };
//   } else {
//     let changeArr = [];
//     for (let i = cid.length - 1; i >= 0; i--) {
//       let currencyUnitName = cid[i][0];
//       let currencyUnitValueTotal = cid[i][1];
//       let currencyUnitValue = currencyUnit[currencyUnitName];
//       let currencyUnitAmount = Number(
//         (currencyUnitValueTotal / currencyUnitValue).toFixed(0)
//       );
//       let currencyUnitToReturn = 0;
//       while (changeDue >= currencyUnitValue && currencyUnitAmount > 0) {
//         changeDue -= currencyUnitValue;
//         changeDue = Number(changeDue.toFixed(2));
//         currencyUnitAmount--;
//         currencyUnitToReturn++;
//       }
//       if (currencyUnitToReturn > 0) {
//         changeArr.push([
//           currencyUnitName,
//           currencyUnitToReturn * currencyUnitValue,
//         ]);
//       }
//     }
//     if (changeDue > 0) {
//       return { Status: "INSUFFICIENT_FUNDS", change: {} };
//     }
//     return { Status: "OPEN", change: changeArr };
//   }
// }

// console.log(
//   checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// );
