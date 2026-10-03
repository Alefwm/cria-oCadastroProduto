const listaProdutos = JSON.parse(localStorage.getItem('produtosCadastrados')) || [];

// Seleciona o elemento onde os produtos vão aparecer na página
const containerTabela = document.getElementById('page2Cadastrados');

// Percorre cada produto da lista para exibi-lo
listaProdutos.forEach(function(produto) {
    const itemLista = document.createElement('p');
    itemLista.textContent = `Produto: ${produto.nome} | Empresa: ${produto.empresa} | Código: ${produto.codigo} | Peso: ${produto.peso}kg`;
    
    // Adiciona na tela
    containerTabela.appendChild(itemLista);
});