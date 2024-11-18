// Função para remover uma forma de pagamento
function removePaymentMethod() {
    alert("Forma de pagamento removida com sucesso.");
    // Aqui, você pode adicionar a lógica para remover a forma de pagamento
}

// Lidar com a submissão do formulário para adicionar um novo cartão
document.getElementById("addPaymentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Novo cartão adicionado com sucesso.");
    // Aqui, você pode adicionar a lógica para enviar o novo cartão ao servidor
});
