// Produtos de exemplo
const products = [
    { name: "Smart TV 55\" 4K", price: "R$ 2.500,00", category: "Eletrônicos", image: "images/produto1.jpg" },
    { name: "Notebook Core i5", price: "R$ 3.200,00", category: "Informática", image: "images/produto2.jpg" },
    { name: "Iphone 15 Pro", price: "R$ 4.200,00", category: "Smartphones", image: "images/produto3.jpg" },
    { name: "Sofá 3 Lugares", price: "R$ 1.500,00", category: "Móveis", image: "images/produto5.jpg" },
    { name: "Geladeira Duplex", price: "R$ 2.800,00", category: "Eletrodomésticos", image: "images/produto21.jpg" },
    { name: "Bicicleta Mountain Bike", price: "R$ 1.800,00", category: "Esportes", image: "images/produto4.jpg" },
    { name: "Livro de Finanças Pessoais", price: "R$ 30,00", category: "Livros", image: "images/produto22.jpg" },
    { name: "Tênis Jordan Tatum 1", price: "R$ 600,00", category: "Moda", image: "images/produto23.jpg" },
    { name: "Boneca Barbie", price: "R$ 50,00", category: "Brinquedos", image: "images/produto24.jpg" },
    { name: "Kit Maquiagem", price: "R$ 80,00", category: "Beleza e Saúde", image: "images/produto25.jpg" },
];

// Função para filtrar produtos por categoria
function filterCategory(category) {
    document.getElementById("categoryTitle").innerText = `Produtos: ${category}`;
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Função para exibir produtos filtrados
function displayProducts(filteredProducts) {
    const productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = "";
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement("a");
        productCard.href = "produto.html";
        productCard.classList.add("product-card");
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        
        productsContainer.appendChild(productCard);
    });
}
