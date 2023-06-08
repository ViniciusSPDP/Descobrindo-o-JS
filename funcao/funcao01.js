
function parimp(n){
    if(n%2 == 0){
        return console.log(`O numero ${n} e par`)
    }else{
        return console.log(`O numero ${n} e impar`) 
    }
}

for(let i =0; i<=10; i++){
    parimp(i)
}

