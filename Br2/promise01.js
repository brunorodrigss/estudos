const aPromisse = new Promise((resolve, reject) => {
    let sum = 1 + 1
    if(sum === 2){
        resolve('Tudo certo')
    } else {
        reject("Deu ruim")
    }
})


console.log('Esperando promise')

aPromisse.then((resultado) => {
    console.log(`Valor do then: ${resultado}`)
}).catch((resultado) => {
    console.error(`Valor do catch: ${resultado}`)
}).finally(() => {
    console.log(`Será executado independente de qualquer coisa`)
})




