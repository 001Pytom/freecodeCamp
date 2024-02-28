let changeInfo = document.querySelector("#change-due");
let btn = document.querySelector("#purchase-btn");
let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];
function checkCashRegister(cash) {
  let currencyUnit = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  let changeDue = cash - price;
  let totalCID = Number(
    cid.reduce((sum, element) => sum + element[1], 0).toFixed(2)
  );
  if (totalCID < changeDue) {
    changeInfo.textContent = "Status: INSUFFICIENT_FUNDS";
    return { Status: "INSUFFICIENT_FUNDS", change: {} };
  } else if (totalCID == changeDue) {
    let nonZeroChange = cid.filter(([unit, value]) => value !== 0);
    changeInfo.textContent = `Status: CLOSED ${nonZeroChange
      .map(([unit, value]) => `${unit}: $${value.toFixed(2)}`)
      .join(" ")}`;
    return { Status: "CLOSED", change: cid };
  } else {
    let changeArr = [];
    for (let i = cid.length - 1; i >= 0; i--) {
      let currencyUnitName = cid[i][0];
      let currencyUnitValueTotal = cid[i][1];
      let currencyUnitValue = currencyUnit[currencyUnitName];
      let currencyUnitAmount = Number(
        (currencyUnitValueTotal / currencyUnitValue).toFixed(0)
      );
      let currencyUnitToReturn = 0;
      while (changeDue >= currencyUnitValue && currencyUnitAmount > 0) {
        changeDue -= currencyUnitValue;
        changeDue = Number(changeDue.toFixed(2));
        currencyUnitAmount--;
        currencyUnitToReturn++;
      }
      if (currencyUnitToReturn > 0) {
        changeArr.push([
          currencyUnitName,
          currencyUnitToReturn * currencyUnitValue,
        ]);
      }
    }
    if (changeDue > 0) {
      changeInfo.textContent = "Status: INSUFFICIENT_FUNDS";
      return { Status: "INSUFFICIENT_FUNDS", change: {} };
    }
    changeInfo.textContent = `Status: OPEN ${changeArr
      .map(([unit, value]) => `${unit}: $${value.toFixed(2)}`)
      .join(" ")}`;
    return { Status: "OPEN", change: changeArr };
  }
}
btn.addEventListener("click", () => {
  let cash = parseFloat(document.querySelector("#cash").value);
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash === price) {
    changeInfo.textContent = "No change due - customer paid with exact cash";
  } else {
    console.log(checkCashRegister(cash));
  }
});
