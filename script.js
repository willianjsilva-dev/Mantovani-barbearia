// Ano do rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Ampliar foto da galeria ao clicar; clicar de novo fecha
const caixa = document.getElementById('lightbox');
const grande = caixa.querySelector('img');

document.querySelectorAll('.foto img').forEach((img) => {
  img.parentElement.addEventListener('click', () => {
    grande.src = img.src;
    grande.alt = img.alt;
    caixa.showModal();
  });
});
caixa.addEventListener('click', () => caixa.close());
