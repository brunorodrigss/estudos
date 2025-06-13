// function testeCallBack (){
//     console.log('dentro da call back')
   
// }

// function executarComMensagem (mensagem, testeCallBack){
//     console.log(mensagem)
//     console.log('vou chamar a call back')
//     testeCallBack()
// }

// executarComMensagem('oi', testeCallBack)


const processarNumeros = (num1, num2, callback) => {
    console.log(num1, num2)
    callback(num1, num2)
}

const somar = (n1, n2) => {
    // soma = n1 + n2
    console.log("a soma é: ", n1+n2)

}

processarNumeros(5, 6, somar)