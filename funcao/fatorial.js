function fatorial(n){
    var res =1
    for(let i = n; i> 1; i--){
        res*=i;
    }
    return res
}
console.log(fatorial(5))

