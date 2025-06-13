function contador(){
    
    let numInicio = document.getElementById('numInicio')
    let numFim = document.getElementById('numFim')
    let numPasso = document.getElementById('numPasso')
    let resultado = document.getElementById('res')

    if (numInicio.value.length == 0 || numFim.value.length == 0  || numPasso.value.length ==0){
        window.alert("[ERRO] Faltam dados!")
    } else {
        resultado.innerHTML = "Contando: <br>"
        let i = Number(numInicio.value)
        let f = Number(numFim.value)
        let p = Number(numPasso.value)
        if (p <= 0){
            window.alert("Passo invalido! Considerando passo = 1")
            p = 1
        }
        if (i < f) { //contagem crescente
            for (let c = i; c <=f; c += p){ 
            resultado.innerHTML += `${c} 👉`         
        }
        } else{ //contagem decrescente
            for (let c = i; c >= f; c -= p){
           resultado.innerHTML += `${c} 👉` 
            }
        }
        resultado.innerHTML += `${c} 👉`    
    }
}