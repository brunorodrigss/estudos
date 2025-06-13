function carregar(){
    let msg = document.getElementById("msg")
    let foto = document.getElementById("teste")
    let data = new Date()
    let hora = data.getHours()
    //let hora = 
    msg.innerHTML = `Agora são ${hora}h.`
    if (hora >= 0 && hora < 12){
        foto.src = 'fotomanha.png'
    } else if (hora >= 12 && hora < 18){
        foto.src = 'fototarde.png'
    } else { 
        foto.src = 'fotonoite.png'

    }



}