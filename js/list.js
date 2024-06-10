import { fetchProdutos, deleteProduto } from './fetch.js';

// Função para criar o card do produto
export function createProdutoCard(produto) {
    const card = document.createElement('div');
    card.classList.add('produtos__box');
    card.innerHTML = `
        <img class="produtos__box__imagem" src="${produto.imagem}" alt="${produto.nome}">
        <p class="produtos__box__nome">${produto.nome}</p>
        <div class="produtos__box__preco">
            <img class="imagem__cifrao" src="assets/cifrao.png" alt="Imagem de um cifrão">
            <p class="produtos__box__box__preco"><strong>${produto.valor}</strong></p>
            <img class="imagem__lixeira" src="assets/lixeira.png" alt="Imagem de uma lixeira" data-id="${produto.id}">
        </div>
    `;
    return card;
}

// Função para listar os produtos na página
async function listProdutos() {
    const produtosContainer = document.querySelector('.produtos__lista');
    produtosContainer.innerHTML = '';
    const produtos = await fetchProdutos();
    produtos.forEach(produto => {
        const produtoCard = createProdutoCard(produto);
        produtosContainer.appendChild(produtoCard);
    });
}

// Event listener para excluir produto
document.querySelector('.produtos__lista').addEventListener('click', async (e) => {
    if (e.target.classList.contains('imagem__lixeira')) {
        const id = e.target.getAttribute('data-id');
        await deleteProduto(id);
        listProdutos();
    }
});

// Inicializar a lista de produtos
listProdutos();
