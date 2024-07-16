async function listarProduto() {
    const conexao = await fetch("https://6691bc9c26c2a69f6e908e42.mockapi.io/api/v1/produtos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem) {

    const conexao = await fetch("https://6691bc9c26c2a69f6e908e42.mockapi.io/api/v1/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida;
}

async function excluirProduto(productId) {
    try {
        const conection = await fetch(`https://6691bc9c26c2a69f6e908e42.mockapi.io/api/v1/produtos/${productId}`, {
            method: "DELETE",
        });
        const data = await conection.json();
        console.log(data);
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
        throw error;
    }
}


export const conection = {
    listarProduto,
    criaProduto,
    excluirProduto
}
