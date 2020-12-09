function ativaScrollSuave(seletor) {
    $(seletor).click(function(event) {
        event.preventDefault();  // cancela o evento default de dar scroll até o elemento do seletor
        var posicao = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(posicao).offset().top     // executa o animate "scrollTop" com o offset = top - posicao
        }, 500)                                  // tempo do animate 1s

    });
}

// ativaScrollSuave("a[href*=painel-sobre]");       // a[href*=painel-sobre] : elemento âncora onde o href tem o string "painel-sobre"
// ativaScrollSuave("a[href*=secao-palestrantes]");
// ativaScrollSuave("a[href*=secao-inscricao]");

ativaScrollSuave("#link-painel-sobre");
ativaScrollSuave("#link-secao-palestrantes");
ativaScrollSuave("#link-secao-inscricao");
