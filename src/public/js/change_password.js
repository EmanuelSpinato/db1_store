// Função para salvar a nova senha
async function saveNewPassword() {
    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmNewPassword = document.getElementById("confirmNewPassword").value;

    if (newPassword !== confirmNewPassword) {
        alert("A nova senha e a confirmação não coincidem.");
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/api/user/change-password", { // Atualize o endpoint conforme necessário
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ currentPassword, newPassword })
        });

        if (response.ok) {
            alert("Senha alterada com sucesso!");
            window.location.href = "profile.html"; // Redireciona de volta para a página de perfil
        } else {
            const errorData = await response.json();
            alert(`Erro: ${errorData.message}`);
        }
    } catch (error) {
        console.error("Erro ao alterar senha:", error);
        alert("Não foi possível alterar a senha. Tente novamente mais tarde.");
    }
}

// Função para cancelar e retornar à página de perfil
function cancelChange() {
    if (confirm("Tem certeza de que deseja cancelar a alteração de senha?")) {
        window.location.href = "profile.html";
    }
}
