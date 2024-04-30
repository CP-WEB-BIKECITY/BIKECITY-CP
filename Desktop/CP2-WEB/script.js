
const colors = ['#7FFFD4', '#F0E68C', '#FA8072'];

function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Chama a função inicialmente para definir a cor de fundo
changeBackgroundColor();

// Define um intervalo para chamar a função a cada 5 segundos (5000 milissegundos)
setInterval(changeBackgroundColor, 5000);



const images = ['img/bikecidade.jpg', 'img/bikeneve.jpg', 'img/bikemontanha.jpg'];
let currentIndex = 0;

function changeSlide() {
    const imageElement = document.getElementById('slideshow-image');
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Chama a função inicialmente para definir a primeira imagem do slideshow
changeSlide();

// Define um intervalo para chamar a função de mudar o slide a cada 5 segundos (5000 milissegundos)
setInterval(changeSlide, 5000);
