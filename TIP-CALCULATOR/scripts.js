const billAmount = document.getElementById('bill');
const tipPercentage = document.getElementById('tip');
const tipAmount = document.getElementById('tip-amount');
const totalAmount = document.getElementById('total-amount');
const calculateButton = document.querySelector('button');

calculateButton.addEventListener('click', () => {
  const bill = parseFloat(billAmount.value);
  const tip = parseFloat(tipPercentage.value); 
  const tipValue = bill * tip / 100;
  const totalValue = bill + tipValue;
  tipAmount.textContent = tipValue.toFixed(2);
  totalAmount.textContent = totalValue.toFixed(2);
});




