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
    $('.depoimentos__caixa').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });
    // Validaçao do formulario de contato
    $('.formulario').validate({
        rules: {
            nome: 'required',
            email: {
                required: true,
                email: true,
            },
            mensagem: {
                required: false,
                email: true,
            },
        },
        messages: {
            nome: 'Por favor preencha o campo com seu nome!',
            email: {
                required: "Por Favor preencha o e-mail!",
                email: "Por favor preencha um e-mail válido!",
            },
            mensagem: 'Este campo é opicional',
        }
    });
});

$('#cep').blur(async (elemento) => {
    var result = await $.get(`https://viacep.com.br/ws/${elemento.target.value}/json/`);
    $('#end').val(result.logradouro);
});