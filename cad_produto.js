const nomeProduto = document.getElementById('nomeProduto');
const nomeDaEmpresa = document.getElementById('nomeDaEmpresa');
const codigoProduto = document.getElementById('codigoProduto');
const dataProduto = document.getElementById('dataProduto');
const pesoProduto = document.getElementById('pesoProduto');
const buttonEntradaProduto = document.getElementById('buttonEntradaProduto');
const cadastroConcluido = document.getElementById('cadastroConcluido');
const page2Cadastrados = document.getElementById('page2Cadastrados');

buttonEntradaProduto.addEventListener('click', function(){
 //evita recarregar a pagina se o botão estiver 
//dentro do form

// vamos começar pela leitura de valores 
//aqui organizando tudo dentro de uma variavel
const produto =  {
    nome: nomeProduto.value.trim(),
    empresa: nomeDaEmpresa.value.trim(),
    codigo: codigoProduto.value.trim(),
    data: dataProduto.value.trim(), // o trim ele faz com que o cmapo de texto diminua e se responsive com o texto
    peso: Number(pesoProduto.value)
}
//aqui ele está fazendo com o que você escreva e caso você não preencher
//tal canto ao qual está selecionado para preenchmento ele vai da o 
//aviso, preencha todos os campos
if (!produto.nome || !produto.empresa || !produto.codigo ||
    !produto.data || !produto.peso) {
    cadastroConcluido.textContent = "preencha todos so campos para prosseguir";
    return; // aqui ele interrompe
    } 
    
// 3. LÓGICA DO CRUD (CREATE):
    // Pega a lista que já existe no localStorage (ou cria uma vazia '[]' se for a primeira vez)
    


    cadastroConcluido.textContent = `produto: "${produto.nome}" 
    cadastrado com sucesso"`;

    nomeProduto.value = '';
    nomeDaEmpresa.value = '';
    codigoProduto.value = '';
    dataProduto.value = '';
    pesoProduto.value = '';
    nomeProduto.focus(); // devolve o cursor ao primeir nivel / campo
});

