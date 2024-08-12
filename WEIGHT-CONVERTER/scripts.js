const poundsInput = document.getElementById('pounds');
const gramsInput = document.getElementById('grams');
const kilogramsInput = document.getElementById('kilograms');
const ouncesInput = document.getElementById('ounces');

poundsInput.addEventListener('input', function() {
  const pounds = parseFloat(poundsInput.value);
  gramsInput.value = pounds * 453.592;
  kilogramsInput.value = pounds * 0.453592;
  ouncesInput.value = pounds * 16;
});

gramsInput.addEventListener('input', function() {
  const grams = parseFloat(gramsInput.value);
  poundsInput.value = grams / 453.592;
  kilogramsInput.value = grams / 1000;
  ouncesInput.value = grams / 28.35;
});

kilogramsInput.addEventListener('input', function() {
  const kilograms = parseFloat(kilogramsInput.value);
  poundsInput.value = kilograms / 0.453592;
  gramsInput.value = kilograms * 1000;
  ouncesInput.value = kilograms * 35.274;
});

ouncesInput.addEventListener('input', function() {
  const ounces = parseFloat(ouncesInput.value);
  poundsInput.value = ounces / 16;
  gramsInput.value = ounces * 28.35;
  kilogramsInput.value = ounces / 35.274;
});
