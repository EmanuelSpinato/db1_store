function viewOrderDetails(orderId) {
    // Exemplo de dados do pedido
    const orderDetails = {
        123: {
            date: "25/10/2024",
            status: "Entregue",
            total: "2499,00",
            items: ["Smart TV 55\" 4K", "Notebook Core i5"]
        },
        124: {
            date: "15/10/2024",
            status: "Em Trânsito",
            total: "1750,00",
            items: ["Samsung Galaxy S23", "Cadeira Gamer"]
        }
    };

    // Atualiza o conteúdo do modal com os detalhes do pedido
    const order = orderDetails[orderId];
    document.getElementById("orderId").textContent = orderId;
    document.getElementById("orderDate").textContent = order.date;
    document.getElementById("orderStatus").textContent = order.status;
    document.getElementById("orderTotal").textContent = order.total;

    // Atualiza a lista de itens
    const itemsList = document.getElementById("orderItemsList");
    itemsList.innerHTML = ""; // Limpa a lista
    order.items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        itemsList.appendChild(listItem);
    });

    // Exibe o modal
    document.getElementById("orderDetailsModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("orderDetailsModal").classList.add("hidden");
}
