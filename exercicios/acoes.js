function acao1() {
    var resp = window.document.getElementById('saida')  // var resp e local a funcao acao1
    resp.innerHTML = '<p>clicou no primeiro botao'     // mas pode ser global se no inicio
}

function acao2() {
    var resp = window.document.getElementById('saida') // operacao += funciona como concatenacao 
    resp.innerHTML += '<p>clicou no segndundo botao'    // faz os textos aparecerem sem apagar os
}                                                       // ja criados

function acao3() {
    var resp = window.document.getElementById('saida')
    resp.innerHTML += '<p>clicou no terceiro botao'
}

function acao4() {
    var resp = window.document.getElementById('saida')
    resp.innerHTML += '<p>clicou no quarto botao'
}