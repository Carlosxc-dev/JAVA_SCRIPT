// template string
var nome = "carlos"
console.log(`1+1= ${nome}`)

//var let const
var a = "carlos"
const x = 10;       //quando variaveis nao mudam durante o codigo 
console.log(a);
console.log(x);

// tipo booleano 
let isAtivo = false ;       // tipo booleano
console.log(isAtivo);
console.log(!isAtivo);      // ! nega o valor pode ser 0 ou 1

console.log(!!3);       //valores todos verdaeiros para js
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log(!!'os falsos...');          // valores todos falsos para js
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));


