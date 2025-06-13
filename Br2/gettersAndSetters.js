const person = {
    firstName: 'Bruno',
    secondName: 'Rodrigues',
    get fullName (){
        return `${person.firstName} ${person.secondName}`

    },
    set fullName (name) { //sempre passa parametros
        const partsOfName = name.split(' ') // o metodo split retorna um array
        this.firstName = partsOfName[0]
        this.secondName = partsOfName[1]
    }

}

console.log(person.fullName)
person.fullName = 'Helena Oliveira'
console.log(person)

//getters => acessar propriedades
//setters => alterar propriedades 