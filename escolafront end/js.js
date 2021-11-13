var x = 10;              // cariavel global , mas pode ser local
var y = 10;          // variavel de escopo global ou escopo local

// conehcendo uma funcao 
function teste(x, y) { // paraemtro pode ser letra ou numero
    return x + y;
}
console.log("o valore de x + Y =", teste(5, 10)); // retorna no devtools
//alert(teste(10, 10));// retorna o valor da funcao na pagina 

//alert(Math.pow(10,2));

// funcao de teste de OU
function or() {
    return x < 10 || y > 10;
}
console.log("funcao retornada OR = ", or());

// funcaoo de teste E
function end() {
    return x < 10 && y > 10;
}
console.log("funcao retornada end = ", end());

// teste logico com ===
function valorTipo() {
    return x < 10 && y == "10";         // 10 string e igual ao 10 number
}
console.log("funcao retornada valor e tipo  = ", valorTipo());

// teste logico com nao
function valorTipo() {
    return y !== 10;         // 10 string e igual ao 10 number
}
console.log("funcao retornada nao = ", valorTipo());

// operadores ternario
function incremento() {
    return --x;
}
console.log("o valor e =", incremento());

//operadores unarios + e -
function unariooo() {
    return x = +"5" + -"5"

}
console.log("converte valores: ", unariooo());


// teste condicional 
function teste() {
    let z = 4;

    if (z > 5) {
        z = 30;
        //alert("a variavel x e maior que 5");
    } else {
        z = 0;
    }
    return z;
}
console.log("z = ", teste());

// declaracoa de objetos 
// objeto e uma var que contem propriedades 
var pessoa = {
    idade: 26,
    nome: 'carlos',
    altura: 1.89,
    casado: true,
};

function apresentar() {
    console.log("idade da pessoa e " + pessoa.idade + " o nome da pessoa e " + pessoa.nome + " a altura e igual a "+ pessoa.altura +" e verdade que esta pessoa e casada? "+ pessoa.casado)
}
apresentar();

// uma var pode receber uma funcao 
var apress = function() {
    console.log("idade da pessoa e " + pessoa.idade + " o nome da pessoa e " + pessoa.nome + " a altura e igual a "+ pessoa.altura +" e verdade que esta pessoa e casada? "+ pessoa.casado)
}
apress();


// metodos 
let aaa = {
    nome: 'carlos',
    somastr: function(){
        aaa.nome = aaa.nome + " henrique";
    }
}
aaa.somastr();
console.log(aaa);

//truthy e falsy
function func() {
    x = null; // null , underfine, -0 , 0 , NaN
    
    if(x){
        console.log("x vdd");
    }else{
        console.log("x falso");
    }
}
func();
