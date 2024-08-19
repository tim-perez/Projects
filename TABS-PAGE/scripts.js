document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-button');
  const images = document.querySelectorAll('.tab-image');
  const contents = document.querySelectorAll('.content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.id;

      buttons.forEach(btn => btn.classList.remove('active'));
      images.forEach(img => img.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      document.querySelector(`.tab-image#${targetId}`).classList.add('active');
      document.querySelector(`.content#${targetId}`).classList.add('active');
    });
  });
});