// Seleciona o botão
var combos = document.getElementById('voltar');

function pag1() {

  // Redireciona para a nova página desejada
  window.location.href = '../index.html'; // Substitua 'nova_pagina.html' pelo caminho da sua nova página
}

// Adiciona um ouvinte de evento para o clique no botão
voltar.addEventListener('click', pag1);

function scrollToCategoria(categoriaId) {
    var categoria = document.getElementById(categoriaId);
    categoria.scrollIntoView({ behavior: "smooth" });
}


const combowhisky = document.getElementById("whisky")

fetch("dados.json").then((response) => {
    response.json().then((dados) => {
        dados.listaCombos[0].listaWhisky.map((produto) => {
            combowhisky.innerHTML += `
            <li id="item">
                <div id="qual">
                    <h2>${produto.tipo}</h2>
                </div>
                <div id="item1">
                    <div id="produto">
                        <img class="pequeno" src="${produto.imgenergetico}">
                        <p>${produto.quantenergetico}</p>
                        <span>${produto.energetico}</span>
                    </div>
                    
                    <div id="produto">
                        <img src="${produto.imggarrafa}">
                        <p>${produto.quantgarrafa}</p>
                        <span>${produto.garrafa}</span>
                    </div>
                    
                    <div id="produto">
                        <img class="pequeno" src="${produto.imggelo}">
                        <p>${produto.quantgelo}</p>
                        <span>${produto.gelo}</span>
                    </div>
                </div>
                <div id="preco">
                    <h1>R$${produto.preco}</h1>
                </div>
            </li>
            `
        })
    })
})

const combogin = document.getElementById("gin")

fetch("dados.json").then((response) => {
    response.json().then((dados) => {
        dados.listaCombos[0].listaGin.map((produto) => {
            combogin.innerHTML += `
            <li id="item">
                <div id="qual">
                    <h2>${produto.tipo}</h2>
                </div>
                <div id="item1">
                    <div id="produto">
                        <img class="pequeno" src="${produto.imgenergetico}">
                        <p>${produto.quantenergetico}</p>
                        <span>${produto.energetico}</span>
                    </div>
                    
                    <div id="produto">
                        <img src="${produto.imggarrafa}">
                        <p>${produto.quantgarrfa}</p>
                        <span>${produto.garrafa}</span>
                    </div>
                    
                    <div id="produto">
                        <img class="pequeno" src="${produto.imggelo}">
                        <p>${produto.quantgelo}</p>
                        <span>${produto.gelo}</span>
                    </div>
                </div>
                <div id="preco">
                    <h1>R$${produto.preco}</h1>
                </div>
            </li>
            `
        })
    })
})

const combovodka = document.getElementById("vodka")

fetch("dados.json").then((response) => {
    response.json().then((dados) => {
        dados.listaCombos[0].listaVodka.map((produto) => {
            combovodka.innerHTML += `
            <li id="item">
                <div id="qual">
                    <h2>${produto.tipo}</h2>
                </div>
                <div id="item1">
                    <div id="produto">
                        <img class="pequeno" src="${produto.imgenergetico}">
                        <p>${produto.quantenergetico}</p>
                        <span>${produto.energetico}</span>
                    </div>
                    
                    <div id="produto">
                        <img src="${produto.imggarrafa}">
                        <p>${produto.quantgarrfa}</p>
                        <span>${produto.garrafa}</span>
                    </div>
                    
                    <div id="produto">
                        <img class="pequeno" src="${produto.imggelo}">
                        <p>${produto.quantgelo}</p>
                        <span>${produto.gelo}</span>
                    </div>
                </div>
                <div id="preco">
                    <h1>R$${produto.preco}</h1>
                </div>
            </li>
            `
        })
    })
})

















/* window.addEventListener('resize', function() {
    var larguraTela = window.innerWidth; // Obtém a largura da tela
    if (larguraTela <= 768) { // Define o limite da largura da tela em 768 pixels
        // Código a ser executado quando a largura da tela for menor ou igual a 768 pixels
        console.log('Largura da tela menor ou igual a 768 pixels.');
        // Ou qualquer outra ação que você deseje executar
    } else {
        // Código a ser executado quando a largura da tela for maior que 768 pixels
        console.log('Largura da tela maior que 768 pixels.');
        // Ou qualquer outra ação que você deseje executar
    }
});
 */