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