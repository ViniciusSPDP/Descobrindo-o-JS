var btn = document.querySelector('.btn')
btn.addEventListener('click', apertou)

function apertou(){
    var inicio = document.querySelector('#Inicio')
    var fim = document.querySelector('#Fim')
    var passo = document.querySelector('#Passo')
    var res = document.querySelector('.res')

    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)


    if(passo <= 0){
        passo = 1
        alert('Nenhum passo digitado então passo vai valer 1 :D')
        console.log(passo)
    }


    var numeros = ''

    if(inicio<=fim){
        //Crescente
        for(var i = inicio; i <= fim; i+=passo){
            numeros += `👉 ${i}`
            //res.innerHTML += i
        }
    }else{
        //decresente
        for(var i = inicio; i>=fim; i-=passo){
            res.innerHTML += i
        }
    }


    res.innerHTML = `${numeros} ❤`
}