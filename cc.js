const noButton = document.getElementById('noButton');
const container = document.querySelector('.container');

noButton.addEventListener('click', function() {
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  // Definir os limites da área dentro da div container
  const minX = 0;
  const maxX = containerWidth - buttonWidth;
  const minY = 0;
  const maxY = containerHeight - buttonHeight;

  // Gerar uma posição aleatória dentro dos limites da área visível
  const newX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
  const newY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

  // Definir a nova posição do botão
  noButton.style.left = `${newX}px`;
  noButton.style.top = `${newY}px`;
});
