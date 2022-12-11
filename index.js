const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');
/*Adiciona uma classe ao seletor. Neste caso, ao clicar no botaoMenu,
 ele adiciona a classe menu-lateral--ativo ao menu.*/
botaoMenu.addEventListener('click', function () {
    menu.classList.toggle('menu-lateral--ativo');/*Permite ativar e desativar sem se preocupar com o click*/
});

const botaoPerfil = document.querySelector(".cabecalho__botao--perfil");

botaoPerfil.addEventListener("click", function () {
    menu.classList.toggle("menu-lateral--ativo");
});

const cartao = document.querySelector('main');

cartao.addEventListener('click', ()=>{
    menu.classList.remove("menu-lateral--ativo");
    console.log("Chamou aqui");
});