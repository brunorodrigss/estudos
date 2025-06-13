const a = [1,2,3]

const b = ['um', 'dois', 'tres']

const [varA, varB, varC = 'sem valor'] = b

console.log(varA)
console.log(varB)
console.log(varC)

//-----------------------------------------------------------------------------------------------------------------------------
let c = 10
let d = 5
let temp 

// temp = c
// c = d
// d = temp

//mesma coisa que foi feito a cima só que com desestruturação
[c, d] = [d, c]

//-------------------------------------------------------------------------------------------------------------------------------
//Objeto


// const [a, ...b] = [1,2,3] ex com rest

// const obj = { p: 'uma string', q: 'outra string'}
// const {r, s} = obj
// console.log(r, s)

// let p, q
// ({p, q} = {p: 'uma string', q: 'outra string'})
// console.log(p, q)


// 🧠 Regra de ouro da desestruturação de objeto:
// ✅ Se quiser extrair uma propriedade com o mesmo nome da variável, use direto.
// 🔁 Se quiser um nome diferente para a variável, renomeie com propriedade: novoNome.

//exemplo mudando o nome da variavel (propriedade:novoNome)
let r, s
({p: r, q: s} = {p: 'uma string', q: 'outra string'})
console.log(r, s)


//---------------------------------------------------------------------------------------------------------------------------------------
//desestruturação em funções, na lista de parametros

function userId({ id }) {
    return id;
}
//                                                    entra no segundo objeto para desestruturar
function whois({ displayName: nameDisplay, fullName: { firstName: name } }) {
    console.log(nameDisplay + " is " + name);
}

const user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
};

console.log("userId: " + userId(user));
whois(user);


//desestruturação de objeto com chave dinamica
// ao inves de passar diretamente a chave do objeto que sera desestruturado pode passar por [] que o js entenderá que a chave foi passada dinamicamente, 
// ele usa o valor da variavel, e não  o nome.
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // ?


//outro exemplo
// const obj = { nome: "João" };
// const chave = "nome";
// const { [chave]: valor } = obj;

// console.log(valor); // ✅ "João"

