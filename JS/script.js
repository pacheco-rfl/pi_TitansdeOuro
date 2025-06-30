//script para carrossel de pratos preferidos
const wrapper = document.querySelector('.carrossel-wrapper');
const cards = document.querySelectorAll('.card');

// Começa no card do meio
let currentIndex = Math.floor(cards.length / 2);

const avancar = document.getElementById('avancar');
const voltar = document.getElementById('voltar');

//quando avançar é clicado, verifica se ele vai ou não pro proximo card
avancar.addEventListener('click', function () {
  if (currentIndex < cards.length - 1) {
    currentIndex = currentIndex + 1; //vai pro próximo
  } else {
    currentIndex = cards.length - 1; //vai pro ultimo
  }
  atualizarCarrossel(); //atualiza e destaca
});

//quando voltar é clicado, aqui ta verificando se ele ta no card anterior ou no primeiro
voltar.addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
  } else {
    currentIndex = 0;
  }
  atualizarCarrossel();
});
//move o carrossel e aplica o destaque para o card atual
function atualizarCarrossel() {
  const cardWidth = cards[0].offsetWidth + 20;

  // Se for o terceiro card não move o carrossel, só destaca
  if (currentIndex === 2) {
    // wrapper.style.transform = 'translateX(0)'; comentei isso pq ele estava fazendo uma pequena animacao pro lado
  } else {
    const offset = cardWidth * currentIndex - (wrapper.parentElement.offsetWidth - cardWidth) / 2;
    wrapper.style.transform = 'translateX(-' + offset + 'px)';
  }

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('destaque');
  }

  if (cards[currentIndex]) {
    cards[currentIndex].classList.add('destaque');
  }
}

atualizarCarrossel();
//fim do script de carrossel
//tentativa de script para aparecer um alerta quando enviar o e-mail

function enviarFormulario(){
  const Data = document.getElementById('data');
  if (Data.length === 9){
    alert('Preencha corretamente os dados.')
  }else{
    alert('Enviado com sucesso')
  }
} 
