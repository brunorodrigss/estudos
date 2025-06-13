function gerarTabuada(){
    let num = document.getElementById('numero')
    let selectTab = document.getElementById('selectTab')

    if (num.value.length == 0){
        window.alert("digite um número")
    } else {
        let n = Number(num.value)   
        let c = 1
        selectTab.innerHTML = ''
        while (c <=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value= `selecTab${c}`
            selectTab.appendChild(item)
            //result = n * c
            c++
        }

    }




}
