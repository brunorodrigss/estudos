// function sayMyName(nome = ''){
//     if (nome === '') {     // mesma coisa q.... if (!nome){}        Se nome for undefined, null, "" ou 0
//         throw new Error('Nome obrigatório') // utilizar throw new Error é uma melhor prática quando comparado com throw "mensagem de erro". o objeto Error possui propriedades como .name .message
//     // }else {
//     //     console.log(nome)
//     }
//     console.log(nome)
// }

// try{
//     sayMyName()
// } catch(e){
//     console.log(e)
// }




// Cenário	O que acontece?
// Error	Apenas informa que houve um erro.
// TypeError	Explica que o erro foi devido ao tipo de dado errado.


function calcularQuadrado(num){
    if(typeof num !== "number"){ // !== ou === compara valor e tipo de variavel enquanto != e == compara somente valor, não considera o tipo => comparação estrita
        throw new TypeError('digite um número válido')  // ainda existe o TypeError que serve para verificar se o erro foi no tipo do dado passado, já o Error funciona para erros no geral.
    }
    console.log(num * num)
    //return quadrado
}

try{
    calcularQuadrado('n')
} catch(e){
    console.error(e.message)
}