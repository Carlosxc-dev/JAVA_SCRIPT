var x = 5;// cariavel global , mas pode ser local
            // variavel de escopo global ou escopo local

function teste(x, y) { // paraemtro pode ser letra ou numero
    return x + y;
}
alert(teste(10, 10));// retorna o valor da funcao na pagina 
console.log(teste(10, 10)); // retorna no devtools
alert(Math.pow(10,2));

