// Elementos de interface
const cartItemsContainer = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");
const purchaseCompleteMessage = document.getElementById("purchaseComplete");

// Dados do carrinho (exemplo de item inicial)
let cartItems = [
    {
        id: 1,
        name: "Apple iPhone 16 Pro 128GB",
        price: 4200.00,
        quantity: 1,
        image: "images/produto3.jpg"
    }
];

// Função para atualizar o HTML do carrinho
function renderCartItems() {
    cartItemsContainer.innerHTML = ""; // Limpa o contêiner
    let total = 0;

    // Adiciona cada item do carrinho ao HTML
    cartItems.forEach(item => {
        total += item.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <div class="quantity-controls">
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-button" onclick="removeItem(${item.id})">Remover</button>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    // Atualiza o total
    totalPriceElement.textContent = `R$ ${total.toFixed(2)}`;
}

// Função para alterar a quantidade do item
function changeQuantity(itemId, change) {
    const item = cartItems.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeItem(itemId);
        } else {
            renderCartItems();
        }
    }
}

// Função para remover o item do carrinho
function removeItem(itemId) {
    cartItems = cartItems.filter(item => item.id !== itemId);
    renderCartItems();
}

// Função para concluir a compra
function finalizePurchase() {
    if (cartItems.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    // Limpa o carrinho e mostra a mensagem de conclusão
    cartItems = [];
    renderCartItems();
    showPurchaseCompleteMessage();
}

// Função para exibir a mensagem de compra concluída
function showPurchaseCompleteMessage() {
    purchaseCompleteMessage.classList.remove("hidden");
    setTimeout(() => {
        purchaseCompleteMessage.classList.add("hidden");
    }, 3000); // Oculta a mensagem após 3 segundos
}

// Inicializa o conteúdo do carrinho
renderCartItems();
