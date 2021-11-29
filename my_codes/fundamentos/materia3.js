// objetos 
const prod1 = {};       // objeto vazio
prod1.nome = "celular ultra mega"       // adiciona propriedade ao objeto dinamicamente 
prod1.preco = 4.999;
console.log(prod1);

// funcao arrow 
const soma = (a, b) => {
    return a + b;
}
console.log("retorno arrow = ", soma(10, 5));

//funcao arrow reduzida ainda mais 
const subtracao = (a, b) => a-b;
console.log("retorno reduzido =", subtracao(10, 12));

// operador destruturing
const [a] = [10];       // retira elem do array
console.log(a);
const [n1, , n2, n5 , n6=0, n7] = [10, 7, 9, 8];       // retira elem do array
console.log(n1, n2, n5, n6, n7);

// operador destruturing 2
function rand({min=0, max=1000}){//gera valor randomico, caso nao passe tem o valor padrao min, max
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);
}
const obj = {max: 50 , min: 40}     //define os limites 
console.log(rand(obj));

