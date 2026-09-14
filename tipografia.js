/*
    =========================================================
    TÓPICO 5 — TIPOGRAFIA

    Este arquivo permite alterar o tamanho
    da tipografia através dos botões.
    =========================================================
*/


document.addEventListener("DOMContentLoaded", function () {


    // =====================================================
    // PEGANDO OS BOTÕES DO HTML
    // =====================================================

    const btnAumentar =
        document.getElementById("btn-aumentar");

    const btnReduzir =
        document.getElementById("btn-reduzir");

    const btnReset =
        document.getElementById("btn-reset");


    // =====================================================
    // PEGANDO O ELEMENTO PRINCIPAL DO DOCUMENTO
    // =====================================================

    const root = document.documentElement;


    // =====================================================
    // FUNÇÃO PARA ALTERAR A ESCALA
    // =====================================================

    function alterarEscala(valor) {

        root.style.setProperty(
            "--scale",
            valor
        );

    }


    // =====================================================
    // BOTÃO AUMENTAR
    // 120% DO TAMANHO NORMAL
    // =====================================================

    btnAumentar.addEventListener("click", function () {

        alterarEscala(1.2);

    });


    // =====================================================
    // BOTÃO REDUZIR
    // 90% DO TAMANHO NORMAL
    // =====================================================

    btnReduzir.addEventListener("click", function () {

        alterarEscala(0.9);

    });


    // =====================================================
    // BOTÃO RESETAR
    // VOLTA PARA 100%
    // =====================================================

    btnReset.addEventListener("click", function () {

        alterarEscala(1);

    });

});
