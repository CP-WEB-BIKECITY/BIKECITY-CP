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
