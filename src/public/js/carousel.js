let currentSlide = 0;

// Seleciona todos os slides do carrossel
const slides = document.querySelectorAll('.carousel-slide');

// Função para mostrar o slide baseado no índice
function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    // Move o carrossel para o slide atual
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

// Função para mover para o próximo ou slide anterior
function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Muda de slide automaticamente a cada 5 segundos
setInterval(() => moveSlide(1), 5000);
