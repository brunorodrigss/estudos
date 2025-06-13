window.addEventListener('DOMContentLoaded', () => {

let palavra = window.document.querySelector('input#palavra')
let res = window.document.getElementById('resultado')
const botao = document.getElementById('testar')
let stringInvertida = ''

function inverteString(){
    
    // let splitString = palavra.value.split("")
    // let reverseArray = splitString.reverse()
    // let joinArray = reverseArray.join("")
    // stringInvertida = joinArray
    stringInvertida = palavra.value.split("").reverse().join("")
    res.innerHTML = stringInvertida
}   

botao.addEventListener('click', inverteString)


})




// let palavra = window.document.querySelector('input#palavra')
// let res = window.document.getElementById('resultado')
// let stringInvertida = ''

// function inverteString(){
    
//     let splitString = palavra.value.split("")
//     let reverseArray = splitString.reverse()
//     let joinArray = reverseArray.join("")
//     stringInvertida = joinArray
//     res.innerHTML = stringInvertida
// }





