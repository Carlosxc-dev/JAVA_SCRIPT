
function notas(nota){
    if ((nota >= 38) && (nota < 40))
    {
        aux = nota
        while(aux == 0){
            if (aux % 5 == 0)
            {
                console.log("aprovado , nota = ");
                aux = 0
            } 
            else
            {
                aux++
            }
        }
    }
    else if(nota >= 40)
    {
        console.log("aprovado");
    }
    else
    {
        console.log("reprovado");
    }
}

console.log(notas(40));