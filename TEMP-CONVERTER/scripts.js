const celsiusInput = document.getElementById('celsius');

const fahrenheitInput = document.getElementById('fahrenheit');

const kelvinInput = document.getElementById('kelvin');

celsiusInput.addEventListener('input', () => {
    const cTemp = parseFloat(celsiusInput.value);
    const fTemp = (cTemp * (9 / 5)) + 32;
    const kTemp = cTemp + 273.15;

    fahrenheitInput.value = fTemp;
    kelvinInput.value = kTemp;
});

fahrenheitInput.addEventListener('input', () => {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp + 459.67) * (5 / 9);

    celsiusInput.value = cTemp;
    kelvinInput.value = kTemp;
});

kelvinInput.addEventListener('input', () => {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = (kTemp * (9 / 5)) - 459.67;

    celsiusInput.value = cTemp;
    fahrenheitInput.value = fTemp;
});

