// for Of para percorrer arrays ou String
// for in para percorrer objeto

// let nome = 'Bruno'

// for (let letra of nome){ // letra é o nome da variavel, pode ser qlqr um, nome é a variavel de onde o for irá percorrer
//     console.log(letra)
// }



let pessoa = {
    nome: 'bruno',
    altura: 1.70,
    peso: 80,
}

for (let atrib in pessoa){
    console.log(`${atrib}` + `: ${pessoa[atrib]}`)
}



