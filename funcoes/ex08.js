function jogadas(jogos){
    let string = jogos.split(", ")
    let maior = string[0]
    let menor = string[0]
    let vet = []
    vet[0] = 0
    vet[1] = 0

    for (let i = 0; i < string.length; i++) {
        if (string[i] > maior)
        {
            maior = string[i]
            vet[0]++
        }
        
        if (string[i] < menor )
        {
            vet[1] = i + 1
            menor = string[i]
        }
    }
    return vet          
}
console.log( jogadas("30, 40, 20, 4, 51, 25, 42, 38, 56, 0"));