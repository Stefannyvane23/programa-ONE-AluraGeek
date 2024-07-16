import { conection } from "./conection.js";

const fromulario  = document.querySelector('[data-formulario]')

async function criarProduto(evento){
    evento.preventDefault();
    const nome  = document.querySelector("[data-nome]").value;
    const url  = document.querySelector("[data-url]").value;
    const preco  = document.querySelector("[data-valor]").value;

    await conection.criaProduto(nome, preco, url)
    window.location.reload(true)
}

fromulario.addEventListener("submit", evento => criarProduto(evento))