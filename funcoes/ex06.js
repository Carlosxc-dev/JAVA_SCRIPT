function jurosSimples(capital, taxa, tempo) {
    return (capital + (capital * taxa * tempo)).toFixed(2)
}

function jurosComposto(capital, taxa, tempo) {
    var conta = capital + (capital * ( (1 + taxa )** tempo))
    return `commposto = ${conta.toFixed(2)}`
}
console.log(jurosSimples(100, 10/100, 2));
console.log(jurosComposto(100, 10/100, 2));



