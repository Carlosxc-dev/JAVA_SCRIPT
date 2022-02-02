
function triangulo(a, b, c) {
    if ((a != b) && (a != c)&& (b != c))
        console.log("escaleno");
    else if ((a == b) && (a == c)&& (b == c))
        console.log("equilatero");
    else
        console.log("isosceles");
}
triangulo(3, 3, 6)