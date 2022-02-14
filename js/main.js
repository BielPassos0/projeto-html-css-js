//JavaScriptPuro
// let botao = document.querySelector('.menu-principal__btn');
// let menuPrincipal = document.querySelector('.menu-principal');
// botao.addEventListener("click", abreFechaMenu);
// function abreFechaMenu(evento) {
// menuPrincipal.classList.toggle('menu-principal--fechado');
//}
// jQuery
$(document).ready(function () {
    // Botao do menu
    $('.menu-principal__btn').click(function () {
        $('.menu-principal').toggleClass('menu-principal--fechado');
    });
    // Slide Depoimentos    
    $('.depoimentos__caixa').slick();
});