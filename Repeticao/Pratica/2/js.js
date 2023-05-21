var btn = document.querySelector("#btn")

btn.addEventListener('click', apertou)

function apertou(){
    var n = document.querySelector('.num')
    var res = document.querySelector('#res')

    n = Number(n.value)

    res.innerHTML = ''

    for(var i = 0; i<=10; i++){
        var mult = n*i

        let option = document.createElement('option')

        option.setAttribute('value', mult)
        option.innerHTML = `${n} * ${i} = ${mult}`
        
        
        res.appendChild(option);

        console.log(mult)
    }
}
