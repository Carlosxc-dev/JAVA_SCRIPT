var soma, sub, div, mul

function operacao (a,b){
    soma = a + b
    sub = a-b
    mul = a*b
    div = a / b
    return soma,sub, div, mul
}
operacao(5, 3)
console.log(soma, sub, mul, div);