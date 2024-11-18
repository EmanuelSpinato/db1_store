// Funções para as abas de Comentários e Propostas
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach(tab => {
        if (tab.id === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    buttons.forEach(button => {
        if (button.textContent.includes(tabId === 'comments' ? 'Comentários' : 'Propostas')) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Funções de Manipulação de Comentários
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');

    if (commentInput.value.trim() !== '') {
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `
            <p><strong>Você:</strong> ${commentInput.value}</p>
        `;

        const replyButton = document.createElement('button');
        replyButton.className = 'reply-button';
        replyButton.textContent = 'Responder';
        replyButton.onclick = () => replyComment(replyButton);

        newComment.appendChild(replyButton);
        commentsList.appendChild(newComment);

        commentInput.value = '';
    } else {
        alert('Por favor, insira um comentário válido.');
    }
}

function replyComment(replyButton) {
    const commentDiv = replyButton.parentNode;
    if (!commentDiv.querySelector('.reply-input')) {
        replyButton.style.display = 'none'; // Esconde o botão 'Responder'
        const replyInput = document.createElement('textarea');
        replyInput.className = 'reply-input';
        replyInput.placeholder = 'Digite sua resposta...';

        const submitReply = document.createElement('button');
        submitReply.textContent = 'Enviar Resposta';
        submitReply.className = 'reply-submit';
        submitReply.onclick = () => {
            const replyText = replyInput.value.trim();
            if (replyText !== '') {
                const reply = document.createElement('p');
                reply.className = 'reply';
                reply.innerHTML = `<strong>Você:</strong> ${replyText}`;
                commentDiv.insertBefore(reply, replyButton); // Insere a resposta acima do botão "Responder"
                replyInput.remove();
                submitReply.remove();
                cancelReply.remove();
                replyButton.style.display = 'block'; // Reexibe o botão 'Responder'
            } else {
                alert('Por favor, insira uma resposta válida.');
            }
        };

        commentDiv.insertBefore(replyInput, replyButton); // Insere a caixa de texto acima do botão "Responder"
        commentDiv.insertBefore(submitReply, replyButton); // Insere o botão enviar acima do botão "Responder"
        const cancelReply = document.createElement('button');
        cancelReply.textContent = 'Cancelar';
        cancelReply.className = 'cancel-reply';
        cancelReply.onclick = () => {
            replyInput.remove();
            submitReply.remove();
            cancelReply.remove();
            replyButton.style.display = 'block'; // Reexibe o botão 'Responder' se cancelar
        };

        commentDiv.insertBefore(replyInput, replyButton);
        commentDiv.insertBefore(submitReply, replyButton);
        commentDiv.insertBefore(cancelReply, replyButton); // Adiciona um botão para cancelar a resposta
    }
}

// Funções de Propostas
function sendProposal() {
    const proposalInput = document.getElementById('proposalInput');
    const proposalsList = document.getElementById('proposalsList');

    if (proposalInput.value.trim() !== '' && parseFloat(proposalInput.value) > 0) {
        const proposedPrice = parseFloat(proposalInput.value);

        const proposalItem = document.createElement('div');
        proposalItem.className = 'proposal-item';
        proposalItem.innerHTML = `
            <strong>Proposta:</strong> R$ ${proposedPrice.toFixed(2)}
            <button class="accept-button" onclick="acceptProposal(${proposedPrice})">Aceitar</button>
        `;

        proposalsList.appendChild(proposalItem);
        proposalInput.value = '';
    } else {
        alert('Por favor, insira um valor válido para a proposta.');
    }
}

function acceptProposal(price) {
    const productPriceElement = document.querySelector('.product-price');
    productPriceElement.textContent = `R$ ${price.toFixed(2)}`;
    alert('Proposta aceita! O preço do produto foi atualizado.');
}

// Alterar Imagem Principal
function changeMainImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
}

// Adicionar algumas propostas iniciais para exibição
document.addEventListener('DOMContentLoaded', () => {
    const proposalsList = document.getElementById('proposalsList');
    const initialProposals = [
        3500.00,
        4000.00,
        3700.50
    ];

    initialProposals.forEach(price => {
        const proposalItem = document.createElement('div');
        proposalItem.className = 'proposal-item';
        proposalItem.innerHTML = `
            <strong>Proposta:</strong> R$ ${price.toFixed(2)}
            <button class="accept-button" onclick="acceptProposal(${price})">Aceitar</button>
        `;
        proposalsList.appendChild(proposalItem);
    });

    const newProposalDiv = document.createElement('div');
    newProposalDiv.className = 'new-proposal-container';
    newProposalDiv.innerHTML = `
        <input type="number" id="proposalInput" placeholder="Digite sua proposta" min="0.01" step="0.01">
        <button onclick="sendProposal()">Enviar Nova Proposta</button>
    `;
    proposalsList.parentElement.appendChild(newProposalDiv);
});
