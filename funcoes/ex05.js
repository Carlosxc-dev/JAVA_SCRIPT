function teste(soma){
    return `R$ ${soma.toFixed(2).toString().replace('.', ',')}`
}
console.log( teste(0.1 + 0.2));