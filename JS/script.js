//script para carrossel de pratos preferidos
const wrapper = document.querySelector('.carrossel-wrapper');
const cards = document.querySelectorAll('.card');

let currentIndex = 0;

const avancar = document.getElementById('avancar');
const voltar = document.getElementById('voltar');

avancar.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % cards.length; // loop para o início
  atualizarCarrossel();
});

voltar.addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length; // loop para o final
  atualizarCarrossel();
});

function atualizarCarrossel() {
  const cardWidth = cards[0].offsetWidth + 20; // largura + margem
  const wrapperWidth = wrapper.parentElement.offsetWidth;

  // Cálculo do deslocamento para centralizar o card atual
  const offset = Math.max(0, cardWidth * currentIndex - (wrapperWidth - cardWidth) / 2);
  wrapper.style.transform = 'translateX(-' + offset + 'px)';

  cards.forEach((card, index) => {
    card.classList.remove('destaque');

    // // oculta cards muito fora da área visível
    // if (index < currentIndex - 2 || index > currentIndex + 2) {
    //   card.style.opacity = '0';
    //   card.style.pointerEvents = 'none';
    // } else {
    //   card.style.opacity = '1';
    //   card.style.pointerEvents = 'auto';
    // }
  });

  if (cards[currentIndex]) {
    cards[currentIndex].classList.add('destaque');
  }
}

atualizarCarrossel();

let intervalo;

function iniciarAutoPlay() {
  intervalo = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    atualizarCarrossel();
  }, 4000000);
}

function pararAutoPlay() {
  clearInterval(intervalo);
}

// Começa o autoplay ao carregar
iniciarAutoPlay();

// Para o autoplay ao passar o mouse
wrapper.addEventListener('mouseenter', pararAutoPlay);

// Retoma o autoplay ao tirar o mouse
wrapper.addEventListener('mouseleave', iniciarAutoPlay);



//if else para se a pessoa tentar enviar o formulario sem preencher
  function enviarFormulario() {
    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("data").value;

    if (nome === "" || email === "" || data === "") {
      alert(" Preencha corretamente todos os dados obrigatórios.");
      return false;
    } else {
      alert(" Enviado com sucesso!");
      return true;
    }
  }