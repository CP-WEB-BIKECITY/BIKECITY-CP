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


const menu = document.querySelector('.card-container');
const cartBtn = document.querySelector('#cart-button');
const cartModal = document.querySelector('#modal');
const itensModal = document.querySelector('#itens-modal');
const cartTotal = document.querySelector('.valor');
const checkout = document.querySelector('#checkout-modal');
const closeModal = document.querySelector('#close-modal');
const cartCounter = document.querySelector('#cart-count');
const endereco = document.querySelector('.Endereço');
const enderecoAviso = document.querySelector('.text-warn');

let cart = [];

// Abrindo o Modal do Carrinho
cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
})

//Fechando Modal
cartModal.addEventListener("click", function(event){
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeModal.addEventListener("click", function(){
    cartModal.style.display = "none"
})

menu.addEventListener("click",function(event){
   
    let parentButton = event.target.closest('.Comprar')

    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))

        addToCart(name,price)

       
    }
})

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if(existingItem){
        existingItem.quantidade += 1;
    } else {
        cart.push({
            name,
            price,
            quantidade: 1
        });
    }

    updateCartModal();
}

function updateCartModal(){
    itensModal.innerHTML = "";
    let total = 0;

    cart.forEach(item =>{
        const cartItemElement = document.createElement("div");
        const itemPrice = item.price * item.quantidade;
        total += itemPrice;
    
        cartItemElement.innerHTML = `
            <div>
                <div>
                    <p>${item.name}</p>
                    <p>Qtd: ${item.quantidade}</p> <!-- Adiciona a quantidade aqui -->
                    <p>R$ ${itemPrice.toFixed(2)}</p> <!-- Adiciona o cifrão aqui -->
                </div>
                <div>
                    <button class="remove-btn" data-name="${item.name}">
                        Remover 
                    </button>
                </div>
            </div>
        `;
    
        itensModal.appendChild(cartItemElement); // Adiciona o item ao modal de itens
    });

    cartTotal.innerHTML = `Total: <b>R$ ${total.toFixed(2)}</b>`; // Adiciona o cifrão aqui e coloca o total em negrito 


    cartCounter.innerHTML = cart.length
}

itensModal.addEventListener("click", function(event){
    if(event.target.classList.contains("remove-btn")){
        const name = event.target.getAttribute("data-name")

        removeItemCart(name);
    }
})

function removeItemCart(name){
    const index = cart.findIndex(item => item.name === name);

    if(index !== -1){
        const item = cart[index];

        if(item.quantidade > 1  ){
            item.quantidade -= 1;
            updateCartModal();
            return;
        }


        cart.splice(index,1);
        updateCartModal();

    }
}

// QUIZ

function comecar() {
    document.getElementById("quiz_butao").style.display = "none"; // Oculta o botão "começar"
    document.getElementById("quiz_respostas").style.display = "block"; // Exibe as perguntas e as respostas do usuário

    // perguntas, alternativas e resposta certa do quiz
    const questionario = [
        // 01
        {
            pergunta: "Qual é o nome dado à parte da bicicleta onde o ciclista senta?",
            alternativa: ["Guidão", "Selim", "Quadro"],
            certo: "Selim" 
        },
        // 02
        {
            pergunta: "Qual é o componente da bicicleta que transfere a energia das pedaladas para a roda traseira?",
            alternativa: ["1817", "1869", "1903"],
            certo: "1817"
        },
        // 03
        {
            pergunta: "Qual é o evento de ciclismo de estrada mais prestigiado e conhecido no mundo?",
            alternativa: ["Giro d'Italia", "Tour de France", "Vuelta a España"],
            certo: "Tour de France"
        },
        // 04
        {
            pergunta: "Qual é o componente da bicicleta que transfere a energia das pedaladas para a roda traseira?",
            alternativa: ["Pedais", "Câmbio", "Corrente"],
            certo: "Corrente"
        },
        //05
        {
            pergunta: "Que tipo de bicicleta é projetada para uso em trilhas e terrenos acidentados?", 
            alternativa: ["Bicicleta de Estrada", "Bicicleta de Triatlo", "Bicicleta Mountain Bike (MTB)"], 
            certo: "Bicicleta Mountain Bike (MTB)" 
        },
        //06
        {
            pergunta: "Quais são os três tipos principais de freios usados em bicicletas?", 
            alternativa: ["Disco, Tambor, V-Brake", "Pedal, Manual, Automático", "Tambor, Pinça, Disco"], 
            certo: "Disco, Tambor, V-Brake" 
        },
        // 07
        {
            pergunta: "Qual destes é um tipo de bicicleta projetado para viagens longas em estradas pavimentadas?", 
            alternativa: ["Bicicleta de Montanha (MTB)", "Bicicleta de Estrada", "Bicicleta Híbrida"], 
            certo: "Bicicleta de Estrada" 
        },
        // 08
        {
            pergunta: "Qual é o nome dado à modalidade de ciclismo que envolve competições de curta distância em uma pista oval?",
            alternativa: ["Mountain Bike", "BMX", "Velódromo"],
            certo: "Velódromo" 
        },
        // 09
        {
            pergunta: "Qual é o componente da bicicleta que é usado para mudar as marchas?",
            alternativa: ["Manoplas", "Pedais", "Câmbio"],
            certo: "Manoplas"
        },
        // 10
        {
            pergunta: "Qual é o material mais comum usado na fabricação de quadros de bicicletas de alta qualidade?",
            alternativa: ["Aço", "Alumínio", "Carbono"],
            certo: "Carbono"
        }
    ];

    // variáveis para armazenar as respostas e a contagem de respostas certas
    let respostas = {};
    let pontuacao = 0;

    // Função para remover acentos e colocar em minúsculas
    function formatarResposta(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f|\u00b4|\u0060|\u005e|\u007e]/g, "").toLowerCase();
    }

    // função para apresentar a pergunta e verificar se a resposta está correta ou errada
    function perguntar(index){
        const pergunta = questionario[index];
        const correcao = prompt(pergunta.pergunta + "\n" + pergunta.alternativa.join("\n")); // solicita uma resposta ao usuário
        const respostaFormatada = formatarResposta(correcao); // Formata a resposta do usuário
        respostas[index] = respostaFormatada; // Armazena a resposta do usuário
        if (respostaFormatada === formatarResposta(pergunta.certo)) { // Verifica se a resposta está correta
            pontuacao++; // Aumenta a pontuação se a resposta estiver correta
        }
    }

    // Executa as perguntas
    for (let i = 0; i < questionario.length; i++) {
        perguntar(i);
    }

    // Mostra o resultado após o questionário
    let resultado = "<h2>Respostas:</h2>";
    for (let i = 0; i < questionario.length; i++) {
        resultado += "<p><strong>Pergunta " + (i + 1) + ":</strong> " + questionario[i].pergunta + "<br><strong>Sua resposta:</strong> " + respostas[i] + "<br><strong>Resposta correta:</strong> " + questionario[i].certo + "</p>";
    }
    resultado += "<h2>Score: " + pontuacao + " de " + questionario.length + "</h2>";
    document.getElementById("quiz_respostas").innerHTML = resultado; // Adiciona os resultados à página do quiz
}