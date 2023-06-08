const btn = document.querySelector("#btn")
btn.addEventListener('click', apertou)

const btn2 = document.querySelector("#btn2")
btn2.addEventListener('click', resultado)

let numero = document.querySelector("#numeros")
var res = document.querySelector("#res")
var n = []
var i = 1

const div = document.querySelector(".div2") 

//acrecentar numero
function apertou(){
    var conversor = Number(numero.value)
    

    if(conversor<0 || conversor == null|| conversor == undefined || isNaN(conversor) ){
        alert("Numero Invalido")
    }else if (n.includes(conversor)) {
        alert("O número já está na lista");
    }else{
        n.push(conversor)

        for(i; i==1; i++){
            res.innerHTML = ''; // Limpa o conteúdo atual da lista
        }

        let option = document.createElement("option")
        option.setAttribute('value', conversor)

        option.innerHTML = `O número adicionado foi ${conversor}`

        res.appendChild(option)

        console.log(n)

        div.innerHTML = ''
        
    }

    numero.value = ''
    numero.focus()

}

//resultaado
function resultado(){


    if(n.length == 0){
        alert('Digite um valor para comecar')

    }else{
        res.innerHTML = ''; // Limpa o conteúdo atual da lista

        let option = document.createElement("option");
        option.innerHTML = `Digite mais números`;
        res.appendChild(option);
    
        div.innerHTML = `<br> A quantidade de numeros digitados é ${n.length}<br> 
        A soma de todos os numeros e ${soma(n)} <br>
        A media dos numeros é ${media(n)} <br>
        O maior numero é ${maiormenor(n)[0]} <br>
        O menor numero é ${maiormenor(n)[1]}`
        
        i --
        n = []

    }
}


function soma(array){
    let somatotal = 0
    for(let i  in array){
        somatotal += array[i]
    }
    return somatotal
}

function media(array){
    let media = soma(n)/array.length
    return media
}

function maiormenor(array){
    let maior = Math.max(...array)
    let menor = Math.min(...array)

    return [maior, menor]
}