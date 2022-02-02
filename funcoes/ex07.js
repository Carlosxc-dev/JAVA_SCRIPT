function baskarA(ax2, bx, c){
    var delta, res = [], x1, x2
    
    delta = bx**2 - ( 4*ax2*c)
    
    if(delta < 0){
        return "delta e negativo"
    }   

    res[0] = (- bx + Math.sqrt(delta)) / (ax2*2)
    res[1] = (- bx - Math.sqrt(delta)) / (ax2*2)

    return res
}

console.log(baskarA(1,3,2));