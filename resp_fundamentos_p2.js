//1
function filtraNumeros(array) {
    var res = []
    for (let x = 0; x < array.length; x++) {
        if (typeof (array[x]) == "number") {
            res.push(array[x])
        }
        
    }
    return res
}
console.log(filtraNumeros(["casa", 1, 5]));

//2
function objParaArray(obj){
    var arr = [];
    for (let chave in obj) {
        arr.push([chave, obj[chave]])   
    }
    return arr
}
obj = {
    nome: "carlos",
    idade: 22,
}
console.log(objParaArray(obj));