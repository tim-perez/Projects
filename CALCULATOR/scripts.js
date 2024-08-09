function clearDisplay() {
  const display = document.querySelector('.display-input');
  display.value = '0';
}

function deleteLast() {
  const display = document.querySelector('.display-input');
  display.value = display.value.slice(0, -1) || '0';
}

function append(value) {
  const display = document.querySelector('.display-input');

  if (display.value === '0') {
      display.value = value;
  } else {
      display.value += value;
  }
}

function calculate() {
  const display = document.querySelector('.display-input');

  try {
      const result = eval(display.value);
      display.value = result;
  } catch (error) {
      display.value = 'Error';
  }
}

