let num = [5, 8, 9, 10]

num[20] = 2
num.push(7)

/*
console.log(num)
console.log(num.length)
console.log(num[3])
console.log(num.sort())
console.log(num[3])
*/

for(let i=0; i< num.length; i++){
    console.log(`A posicao ${i} esta armazendo o valor ${num[i]}`)
}


