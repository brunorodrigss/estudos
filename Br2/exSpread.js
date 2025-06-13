const lista1 = ['banana', 'maça']
const lista2 = ['pera', 'uva']


// const listaFinal = function (l1, l2){
//     return [...l1, ...l2]
// }

const listafinal = (l1,l2) => [...l1,...l2]

const juntarLista = listaFinal(lista1,lista2)
juntarLista.forEach(item => console.log(item))

