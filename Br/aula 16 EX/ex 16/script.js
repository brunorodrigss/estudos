let num = document.getElementById('txtnumero')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#resultado')
let listaNum = []

function isanumber(n){
    if (Number(n) > 0 && n <= Number(100)){
        return true
    } else {
        return false
    }

}

function inlista(n, lista){
    if(lista.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}



function adicionar(){
    
    if (isanumber(num.value) &&  !inlista(num.value, listaNum)){
        listaNum.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        window.alert('valor invalido ou já está na lista')
    }
    //n = num.value => pelo teste, eu nao preciso de outra variavel para receber num.value. posso fazer o push direto para num.value
    num.value = ''
    num.focus()
    res.innerHTML = ''
    //window.alert(listaNum)
}


function mostrarRes(){
    if (listaNum.length == 0){
        window.alert('insira algum núemro antes de finalizar ')
    } else {
        let total = listaNum.length
        let maior = listaNum[0]
        let menor = listaNum[0]
        let soma = 0
        let media = 0
        for (let pos in listaNum){
            soma += listaNum[pos]
            if (listaNum[pos] > maior){
                maior = listaNum[pos]
            }   else {
                menor = listaNum[pos]
            }
            
        }
        res.innerHTML = ''
        res.innerHTML += `<p>O maior valor digitado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}</p>`
        res.innerHTML += `<p>Existem ${total} números cadastrados</p>`
        res.innerHTML += `<p>A soma dos valores digitados é ${soma}</p>`
        media = soma/listaNum.length
        res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`


    }



}


