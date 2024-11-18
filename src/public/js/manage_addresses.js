// Função para abrir o formulário de adicionar novo endereço
function openAddAddressForm() {
    document.getElementById("addressFormSection").classList.remove("hidden");
    document.getElementById("formTitle").innerText = "Adicionar Novo Endereço";
}

// Função para cancelar a adição ou edição do endereço
function cancelAddressForm() {
    document.getElementById("addressFormSection").classList.add("hidden");
    document.getElementById("addressForm").reset();
}

// Função para salvar o endereço
function saveAddress() {
    alert("Endereço salvo com sucesso!"); // Substitua com lógica de API para salvar endereço
    cancelAddressForm();
}

// Função para editar o endereço
function editAddress() {
    document.getElementById("addressFormSection").classList.remove("hidden");
    document.getElementById("formTitle").innerText = "Editar Endereço";
    // Preencha o formulário com dados do endereço para edição
}

// Função para excluir o endereço
function deleteAddress() {
    if (confirm("Tem certeza que deseja excluir este endereço?")) {
        alert("Endereço excluído com sucesso!"); // Substitua com lógica de API para excluir endereço
    }
}
