const listaProdutos = JSON.parse(localStorage.getItem('produtosCadastrados')) || [];
const containerTabela = document.getElementById('page2Cadastrados');

// Limpa o container antes de desenhar
containerTabela.innerHTML = '';

if (listaProdutos.length === 0) {
    containerTabela.innerHTML = '<p style="text-align: center; color: #888;">Nenhum produto cadastrado até o momento.</p>';
} else {
    listaProdutos.forEach(function(produto, index) {
        // Cria o card principal
        const itemDiv = document.createElement('div');
        itemDiv.className = 'produto-card';

        // Cria a área do texto organizada
        const textoInfo = document.createElement('div');
        textoInfo.className = 'produto-info';
        textoInfo.innerHTML = `
            <strong style="font-size: 16px; color: #50fa7b;">${produto.nome}</strong><br>
            <span>🏢 Empresa: ${produto.empresa}</span> | 
            <span>🔖 Código: ${produto.codigo}</span><br>
            <span>📅 Data: ${produto.data}</span> | 
            <span>⚖️ Peso: ${produto.peso}kg</span>
        `;

        // Cria o botão de remover estilizado
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.className = 'btn-remover';
        
        botaoRemover.addEventListener('click', function() {
            listaProdutos.splice(index, 1);
            localStorage.setItem('produtosCadastrados', JSON.stringify(listaProdutos));
            location.reload(); // Recarrega a página para atualizar a lista
        });

        // Junta tudo no card
        itemDiv.appendChild(textoInfo);
        itemDiv.appendChild(botaoRemover);
        containerTabela.appendChild(itemDiv);
    });
}