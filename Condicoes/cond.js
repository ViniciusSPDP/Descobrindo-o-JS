var agora = new Date()
var hora = agora.getHours()
var idade = 21

if(idade<16){
    console.log("Não vota " + hora)
}else{
    if(idade >=16 && idade <18){
        console.log('Voto opcioonal ' + hora)
    }
    else{
        console.log('Voto obrigatorio ' + hora)
    }
}