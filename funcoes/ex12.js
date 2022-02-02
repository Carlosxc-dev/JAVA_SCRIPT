function fatorial(valor){
    let aux, acumulador

    acumulador = valor
    for (let i = valor-1; i > 0; i--) {
        aux = i * acumulador
        acumulador = aux 
    }
    return aux   
}
console.log(fatorial(10));