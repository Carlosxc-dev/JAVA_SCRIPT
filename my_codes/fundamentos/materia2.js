//arrays 
const valores = [7.7, 5.4, 6.3, 0.3];       // array com 5 elem 0 a 3 indices 
console.log(valores[3]);        // se nao tem indice esta underfined
valores[4] = 10;        // adiciona valores 
console.log(valores[4]);
console.log(valores.length);

valores.push({id: 3}, false, null, "teste"); // funcao que adiciona valores 
console.log(valores);

console.log(valores.pop());     // apaga elem do arrays e o retorna 
delete valores[0];
console.log(valores);

