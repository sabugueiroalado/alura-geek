import { createProduto } from './fetch.js';
import { createProdutoCard } from './list.js';

// Função para capturar os valores do formulário e criar um novo produto
async function handleCreateProduto(event) {
    event.preventDefault();
    const nome = document.querySelector('#nome').value;
    const valor = document.querySelector('#valor').value;
    const imagem = document.querySelector('#imagem').value;
    
    const novoProduto = {
        nome,
        valor,
        imagem
    };

    const createdProduto = await createProduto(novoProduto);
    document.querySelector('.adicionar__form').reset();
    
    const produtosContainer = document.querySelector('.produtos__lista');
    const produtoCard = createProdutoCard(createdProduto);
    produtosContainer.appendChild(produtoCard);
}

// Adicionar event listener ao botão "Guardar"
document.querySelector('#guardar').addEventListener('click', handleCreateProduto);

// Adicionar event listener ao botão "Limpar"
document.querySelector('#limpar').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.adicionar__form').reset();
});
