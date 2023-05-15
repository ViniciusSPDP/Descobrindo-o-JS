function verificar(){
    var date = new Date()
    var ano = date.getFullYear()

    var hano = document.querySelector('.hano')
    var res = document.querySelector(".res")

    if (hano.value.length == 0 || Number(hano.value) > ano){
        alert('Verifique os dados !')
    }else{
        var sex = document.getElementsByName('rad')
        var idade = ano - Number(hano.value)
        var genero = ''

        //Criando IMG
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')


        if(sex[0].checked){
            genero = 'Masculino'

            if(idade >=0 && idade<=10){
                img.setAttribute('src', 'homem/1.jpg')

            }else if(idade<=21){
                img.setAttribute('src', 'homem/2.jpg')

            }else if(idade<50){
                img.setAttribute('src', 'homem/3.jpg')

            }else{
                img.setAttribute('src', 'homem/4.jpg')

            }


        }else if(sex[1].checked){
            genero = 'Feminino'

            if(idade >=0 && idade<=10){
                img.setAttribute('src', 'mulher/1.png')


            }else if(idade<=21){
                img.setAttribute('src', 'mulher/2.png')


            }else if(idade<50){
                img.setAttribute('src', 'mulher/3.png')


            }else{
                img.setAttribute('src', 'mulher/4.png')


            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Seu sexo é ${genero} com ${idade} anos`
        res.appendChild(img)
    }


}