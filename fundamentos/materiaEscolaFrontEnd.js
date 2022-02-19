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

//condicional ternario 
let ab = 11;

var teste = ab === 10 ? ab = 5 : ab = 20;// teste e so uma variavel 

console.log(teste);

// retorno de arrys
function arr() {
    return  [5,'a',2];//vetor
}
function soma() {
    var som = arr()[0] + arr()[2];
    return som;
}
console.log("numero do vetor printado =  ", soma());

// retorno de objetos 
function objj() {
    return {
        nome : "carlos",
        idade : 26,
        sexo : "m",
    }
}
console.log("nome dentro do objeto retornado na funcao = ",objj().nome);

// operador virgula 
var a, b=2, c=3; //usa so pra juntar varias var do mesmo tipo
function test() {
    return (a += 1, a) // retorna dois parametros 
}

// switch case
function nome(x) {
    switch (x) {
        case "carlos":
            console.log("escolheu o a opcao teste ");
            break; 
        case 2:
        console.log("escolheu o a opcao ", +x);
        break;
    }
}
nome("carlos");

// repeticao while 
x= 1;
while (x < 10) {
    console.log("teste while = ",x);
    x++;
}

// operdor modulo 
x = 0;
while (x < 11) {
    x ++;
    var mod = x % 2;
    console.log("modulo = ",mod);
}

// arrays
var arr = ["carlos", 3 , {idade: 26, nome: "carlos"}];
var quant = arr.length;
console.log("a posica tal do array tem: ", + arr[2].idade);


// metodo push 
var array = ["carlos", "henrique", 1,2,3, true];
function atualiza() {
    array.push([3,2,1]);
    return array;
}
console.log("metodo push no arry = ", atualiza());

// for 
var somaa;
for (var num = 0; num < 10; num++) {
    console.log("soma = ", +(num));
}

// funcao autoexecutavel 
(function () {
    console.log("exeutada sozinha");
}());

//typeof so testa tipos primitivos no js
var nomeee = "julio";
var nome = 500;
var nome =true;
document.write(typeof nomeee);// escreve na pagina do site 