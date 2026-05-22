const buttons = document.querySelectorAll('.card-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.dataset.product;
    alert(`Ai ales: ${product}. Ne poți contacta pentru comanda ta!`);
  });
});
