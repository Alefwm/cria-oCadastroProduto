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
    cadastroConcluido.style.color = 'red';
    return; // aqui ele interrompe
    } 
    
// vamos criar a parte que vai gera todo o salvamento do site localstorage
    
let listaProdutos = JSON.parse(localStorage.getItem('produtosCadastrados')) || [];
/*
LISTA PARA FINS ACADEMICOS DO QUE SIGNIFICA CADA CAMADA
1 - let está criando lsitaProduto como um variavel mudável;

2 - Json.parse: : O localStorage só entende texto. O JSON.parse pega esse texto salvo e o "desempacota",
 transformando-o de volta em um Array (uma lista) de objetos do JavaScript que o nosso código sabe ler e manipular.

3- Localstorage: localStorage.getItem('produtosCadastrados'): Vai até o "baú"
 de armazenamento do navegador e tenta buscar se já existe algo salvo com esse nome específico ('produtosCadastrados').
 Como o localStorage só guarda textos (strings), ele vai retornar os dados em formato de texto bruto.

4 - || [] (O operador "OU"): Se for a primeira vez que você está abrindo o site
 e ainda não existe nenhum produto cadastrado, o getItem vai retornar vazio (null). O operador || diz ao JavaScript:
 "Se não encontrar nada salvo, use uma lista vazia [] no lugar". Isso evita que o código quebre por falta de dados.

*/ 

listaProdutos.push(produto); // adiciona sempre uma nova opção na lista

localStorage.setItem('produtosCadastrados', JSON.stringify(listaProdutos));

/*
localStorage.setItem, aqui a opção " set" irá me printar os produtos cadastrados, certo diferente do get que ler
o set ele lanç ao resultado, ok,  temos entre aspas o produtosCadastrados e o JSON.stringify e diferente do .parse, que desempaota
o stringify empacota tudo em uma string só, upando tudo de uma só vez




*/
    cadastroConcluido.textContent = `produto: "${produto.nome}" cadastrado com sucesso"`;
    cadastroConcluido.style.color = 'green';

    nomeProduto.value = '';
    nomeDaEmpresa.value = '';
    codigoProduto.value = '';
    dataProduto.value = '';
    pesoProduto.value = '';
    nomeProduto.focus(); // devolve o cursor ao primeir nivel / campo
});

