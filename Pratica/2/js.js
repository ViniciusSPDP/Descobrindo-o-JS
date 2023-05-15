function carregar() {
    var msg = document.querySelector(".msg")
    var img = document.querySelector(".img")

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas`

    if(hora >= 6 && hora<=12){
        img.src = "IMG/1.jpg"
        document.body.style.background = "#F8A26C"
    }else if(hora>12 && hora<=18){
        img.src = "IMG/2.jpg"
        document.body.style.background = "#FF6009"
    }else{
        img.src = "IMG/3.jpg"
        document.body.style.background = "#5C4567"
    }

}



