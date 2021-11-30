// aritmeticos --------------------------------------------------------------------
const [a,b,c,d]=[3,5,6,15];     //atribui valores as variaveis 
const soma = a+b;
console.log(soma);

// operadores relacionais (resultado e sempre true/false)---------------------------
console.log("3" !== 3);
console.log("3" != 3);
console.log("3" == 3);
console.log("3" === 3);
console.log(undefined === null);        // melhor usar === e !==
console.log(undefined == null);

//operadores logicos ---------------------------------------------------------------
function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2;     
    const manterSaudavel = !comprarSorvete;     //operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};      //retorno em um obj
}
console.log("retorno trabalhos = ",compras(true, true));

//unarios x++ ou --x
let nun1=1, nun2=2;
console.log(++nun1 === nun2--);     // v ou f ? , evitar escrever isso 

// operador ternario
const resultado = nun1 => nun2 >= 7 ? "aprovador" : "reprovado";
console.log(resultado(7.1));

// tratamento de erros --------------------------------------------------
// serve pra nao mostra erros do sistema para o usuario
function tratarErro(e){
    throw "mensagem de erro da funcao tratar erro"        //throw lancar algo
}


function imprimi(obj) {
    try {       // tente
        console.log(obj.nome.toUpperCase() + "!!!");
    } catch (e) {       //se der errado
        tratarErro(e)
    }finally{       //independe do resultado faca
        console.log("final");
    }
}
const obj = {name: "roberto"}
imprimi(obj);
