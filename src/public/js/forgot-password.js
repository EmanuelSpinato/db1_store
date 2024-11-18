// Exibe o campo de código de verificação e altera a mensagem de instrução
function handleFormSubmit(event) {
    event.preventDefault();
    document.getElementById("instructionText").innerText = "Digite o código enviado no e-mail informado.";
    document.getElementById("forgotPasswordForm").style.display = "none";
    document.getElementById("codeVerificationSection").classList.remove("hidden");
}

// Simula a verificação do código (exemplo)
function verifyCode() {
    const code = document.getElementById("verificationCode").value;
    if (code === "1234") {  // Substitua "1234" por uma validação real
        document.getElementById("instructionText").innerText = "Digite sua nova senha.";
        document.getElementById("codeVerificationSection").style.display = "none";
        document.getElementById("passwordResetSection").classList.remove("hidden");
    } else {
        alert("Código incorreto. Tente novamente.");
    }
}

// Função para redefinir a senha
function resetPassword() {
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword === confirmPassword) {
        alert("Senha redefinida com sucesso! Redirecionando para a página de login.");
        window.location.href = "index.html";
    } else {
        alert("As senhas não coincidem. Tente novamente.");
    }
}
