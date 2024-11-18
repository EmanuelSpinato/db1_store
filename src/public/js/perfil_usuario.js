// Função para salvar as alterações no backend
async function saveChanges() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    try {
        const response = await fetch("http://localhost:3000/api/user/update", { // Atualize o endpoint conforme necessário
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fullName, email, phone })
        });

        if (response.ok) {
            alert("Alterações salvas com sucesso!");
            window.location.href = "profile.html"; // Redireciona de volta para a página de perfil
        } else {
            const errorData = await response.json();
            alert(`Erro: ${errorData.message}`);
        }
    } catch (error) {
        console.error("Erro ao salvar alterações:", error);
        alert("Não foi possível salvar as alterações. Tente novamente mais tarde.");
    }
}

// Função para cancelar e retornar à página de perfil
function cancelChanges() {
    if (confirm("Tem certeza de que deseja cancelar as alterações?")) {
        window.location.href = "profile.html";
    }
}
