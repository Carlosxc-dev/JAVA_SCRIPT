// 1
function comprimentar(nome) {
    return "ola " + nome + " !";
}
console.log(comprimentar("Maria"));

// 2
function converteIdadeEmAnosParaDias(idade) {
    return idade * 365;
}
console.log("idade em dias= ", converteIdadeEmAnosParaDias(25));

//3
function calculaSalario(QuantHorasMes, valorHora) {
    return "salario= " + QuantHorasMes * valorHora;
}
console.log(calculaSalario(150, 40.5));

//4
function retornaMes(numMes) {
    const mes = ["janeiro", "fevereiro", "marco", "abril", "maio", "junho"];
    return mes[numMes - 1];
}
console.log("mes= ", retornaMes(3));

//5
function maiorOuIgual(a, b) {
    if (a >= b) {
        return true;
    } else {
        return false;
    }
}
console.log("valores sao maior ou iguais = ", maiorOuIgual(5, 10));

//6 
function inverso(valor) {

    if (typeof (valor) == "string") {
        return `esperado bool ou number, mas o tipo e ${typeof (valor)}`;
    }
    if (typeof (valor) == "number") {
        return - valor;
    }
    if (typeof (valor) == "boolean") {
        if (valor == true) {
            return false;
        }
        else {
            return true;
        }
    }
}
console.log(inverso("casa"));


//7
function multiplicar(a = 0, b = 0) {
    var conta = 0;
    for (x = 0; x < b; x++) {
        conta += a;
    }
    return (conta);
}
console.log("resultado da conta = ", multiplicar(5, 10));

//8
function simboloMais(valor) {
    var simb = "";
    for (x = 0; x < valor; x++) {
        simb += "+"
    }
    return simb;
}
console.log(simboloMais(10));

//9
function receberPrimeiroUltimoElemto(array) {
    var tam = array.length - 1;
    return `primeiro elemento = ${array[0]} e segundo elem = ${array[tam]}`
}
console.log(receberPrimeiroUltimoElemto([1, 2, "ult"]));

//10
function removePropriedade(obj, propri) {
    delete obj.tipo
    return obj
}
var casa= {
    tam: 20,
    tipo: "grande",
    venda: true,
}
console.log("obj sem propr = ",removePropriedade(casa, casa.venda));