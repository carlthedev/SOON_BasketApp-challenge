let stockLevel = 10;
let currentValue = 1;
const addButton = document.getElementById("add-btn");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const amount = document.getElementById("amount");
const basket = document.getElementById("basket-count");

minusBtn.addEventListener("click", function() {
  if (currentValue > 1) {
    currentValue--;
    amount.textContent = currentValue;
  }
});

plusBtn.addEventListener("click", function() {
  if (currentValue < stockLevel) {
    currentValue++;
    amount.textContent = currentValue;
  } else {
    alert("Sorry, there are only " + stockLevel + " items in stock.");
  }
});

addButton.addEventListener("click", function() {
  if (stockLevel === 0) {
    alert("Sorry, this item is out of stock.");
  } else if (currentValue > stockLevel) {
    alert("Sorry, there are only " + stockLevel + " items in stock.");
  } else {
    basket.textContent = parseInt(basket.textContent) + currentValue;
    stockLevel -= currentValue;
    document.getElementById("stock-level").textContent = stockLevel + " in stock";
    currentValue = 1;
    amount.textContent = currentValue;
  }
});