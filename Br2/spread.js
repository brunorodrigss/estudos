// let name = ['bruno']

// let surName = ['rodrigues']

// let completeName = [...name, ...surName]

// console.log(completeName)

let obj1 = { 
    name: 'Bruno',
    surName: 'Rodrigues'

    }

let obj2 = {...obj1}

obj1.name = 'Br'

// console.log(obj1)
// console.log(obj2)

let obj3 = {...obj1, ...obj2}
console.log(obj3) // nesse caso o resultado sera: name: bruno, surname: rodrigues
//o ultimo objeto no spread prevalece em caso de conflito. como há duas propriedades name, no objt 2 name é bruno.
