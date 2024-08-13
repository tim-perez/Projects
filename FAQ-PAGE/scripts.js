const icons = document.querySelectorAll('.icon');

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const answer = icon.parentElement.nextElementSibling;
    answer.classList.toggle('show');

    if (answer.classList.contains('show')) {
      icon.textContent = '-';
    } else {
      icon.textContent = '+';
    }
  });
});