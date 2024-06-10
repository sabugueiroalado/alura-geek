const API_URL = "http://localhost:3000/produtos";

// Função para fazer requisição GET e obter todos os produtos
export async function fetchProdutos() {
    const response = await fetch(API_URL);
    return await response.json();
}

// Função para fazer requisição POST e criar um novo produto
export async function createProduto(produto) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
    });
    return await response.json();
}

// Função para fazer requisição DELETE e excluir um produto
export async function deleteProduto(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
    return await response.json();
}
