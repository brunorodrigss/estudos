// transforme as notas do sistema numerico para um sistema de notas em caracteres tipo  A B C DOMException


// de 90 pra  cima - A
// entre 80 e 89 - B
// entre 70 e 79 - C
// entre 60 e 69 - D
// menor que 60 - F


let notaN 
// let notaL =''

// switch(true){
//     case notaN >= 90:
//         notaL = 'A'
//     break;
//     case notaN >=80 && notaN < 90:
//         notaL = 'B'
//     break;
//     case notaN >=70 && notaN < 80:
//         notaL = 'C'
//     break;
//     case notaN >=60 && notaN < 70:
//         notaL = 'D'
//     break;
//     case notaN < 60:
//         notaL = 'E'
//     break;

// }

// console.log(notaL)
function getNota(notaN){
    if (notaN > 100){
        console.log('nota invalida')
    } else if (notaN >= 90){
        console.log('A')
    } else if(notaN < 90 && notaN >= 80){
        console.log('B')
    } else if(notaN < 80 && notaN >= 70){
        console.log('C')
    } else if(notaN < 70 && notaN >= 60){
        console.log('D')
    } else if(notaN < 0){
        console.log('nota negativa é invalida')
    } else {
        console.log('E')
    }
}

getNota(50)
getNota(60)
getNota(70)
getNota(-1)
getNota(90)
getNota(100)
getNota(101)