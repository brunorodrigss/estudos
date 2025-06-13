//function expression or anonymous
//função sem nome

// const sum = function (n1,n2){ // parametros ou parametros formais
//     console.log(n1+n2)
// }

// sum(2,3) //arguments / parametros reais



// const sum = function (n1,n2){ // parametros ou parametros formais
//     return n1+n2
// }


// let num1 = 2
// let num2 = 3

// // let result = sum(num1,num2)
// console.log(let result = sum(num1,num2))

// Arrow Function
// //function expression -> Arrow function -> geralmente atribuida a uma constante
// const sayMyName = (nome) => {
//     console.log(nome)

// }

// sayMyName('bruno')

//function declaration -> quando a função é realmente declarada , com nome. != de atribuída a uma variavel
//callback function

// function sayMyname(name){
//     console.log('antes da callback')

//     name()      

//     console.log('depois da callback')

testeIff ( () => {} )
// }

// sayMyname( () => {console.log('estou em uma call back')})

// função autoexecutavel

// (function() {}) ()
//este é um caso especifico em que é NECESSÁRIO colocar ";" ao final da linha caso contrario ocorrerá um erro. 
let number = 1; // uma declaração e atribuição de valor a uma variavel antes de uma função autoexecutavel

(function() {
    console.log('olá')
}) ()