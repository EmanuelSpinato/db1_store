// Função para buscar e exibir apenas os produtos que correspondem ao termo de pesquisa
function searchProduct() {
    const searchQuery = document.getElementById('search').value.trim().toLowerCase();
    const products = document.querySelectorAll('.offer-card');
    
    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        
        // Exibe apenas os produtos que contêm o termo de pesquisa
        if (productName.includes(searchQuery)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
    
    // Exibe uma mensagem se nenhum produto for encontrado
    if (searchQuery && !Array.from(products).some(product => product.style.display === 'block')) {
        alert('Nenhum produto encontrado para essa busca.');
    }
}
