import { conection } from "./conection.js"

async function excluirProduto(productId) {
    try {
        await conection.excluirProduto(productId);
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }

    window.location.reload(true);
}

export { excluirProduto };



