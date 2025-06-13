//objetos

// let person = {
//     name: 'Bruno',
//     age: 37,
//     isAdmin: true,
// }

// console.log(person)


function Person(nome){
    this.name = nome
}

const joao = new Person('João')
const bruno = new Person('Bruno')
console.log(bruno.name)
console.log(joao.name)


Object.defineProperties()
