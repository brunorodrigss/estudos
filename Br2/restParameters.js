const mult = (multiplicador, ...argsRest) => { // o rest deve ser sempre o ultimo parametro passado(pode ser apenas ele), não pode passar dois rest
    // return argsRest.map((valorDoArray) => multiplicador * valorDoArray) //o metodo map percorre um array 
    return argsRest.map((valorDoArray) => {
        console.log(`${multiplicador} x ${valorDoArray}`)
        return multiplicador * valorDoArray //o metodo map percorre um array 
        
    })
}   

console.log(mult(2,2,3,4,5))


// //essa eh a sintaxe do metodo map(). no exemplo a cima eu usei apenas o primeiro argunto q eh referente ao valor do elemento do array
// array.map((elemento, indice, arrayCompleto) => {
//     // código que transforma o elemento
// });


