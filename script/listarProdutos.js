import { conection } from "./conection.js";
import { excluirProduto } from "./excluirProduto.js";


const lista = document.querySelector("[data-lista]")

function constroiCard(name, price, image, id) {
    const produto = document.createElement("div")
    produto.className = "card-produto";

    produto.innerHTML = `
                    <img class="image-card" src="${image}" alt="">
                    <div>
                        <p>${name}</p>
                        <div class="price">
                            <p>$ ${price}</p>
                            <button id="${id}" class="trash" data-form-delete>
                                <img src="src/assets/Vector.png" alt="excluir">
                            </button>
                        </div>
                    </div>
                    `
    return produto;
}

async function listaProduto() {
    const listaApi = await conection.listarProduto();
    listaApi.forEach(element => lista.appendChild(constroiCard(element.nome, element.preco, element.imagem, element.id)))

    const deleteBtns = document.querySelectorAll("[data-form-delete]");
    deleteBtns.forEach(btn => {
        btn.addEventListener("click", () => excluirProduto(btn.id));
    });

}

listaProduto();
