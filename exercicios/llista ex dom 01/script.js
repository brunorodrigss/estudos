const div1 = document.querySelector("div#div1")
const div2 = document.querySelector("div#div2")
const botaoAdd = document.querySelector("input#add")
const botaoRemove = document.querySelector("input#remove")
const botaoAddDiv = document.querySelector("input#addDiv")
const botaoAddLista = document.querySelector("input#addLista")
const botaoAddItemLista = document.querySelector("input#addItemLista")

function criarParagrafo () {
    const newP = document.createElement('p')
    newP.textContent = 'esse paragrafo foi criado dinamicamente'
    div2.appendChild(newP)
}

//forma antiga de fazer
// function removerParagrafo(){
//       const paragrafo = div2.getElementsByTagName('p')   
//       const ultimoParagrafo = paragrafo[paragrafo.length -1]
//       document.div2.removeChild(ultimoParagrafo)
//     }
// }


function removerParagrafo(){
    const ultimoParagrafo = div2.querySelector('p:last-child')
    if (ultimoParagrafo){
        div2.removeChild(ultimoParagrafo)
    }
}

function adicionarDiv(){
    const novaDiv = document.createElement('div')
    novaDiv.id = 'div3'
    novaDiv.textContent = 'essa é a nova div: Div3'
    novaDiv.classList.add('destaque') //foi usado pro css mas dpois mudei para alterar a cor pelo id
    div2.after(novaDiv)
}


function adicionarLista(){
    const novaLista = document.createElement('ul')
    novaLista.textContent = 'Nova Lista'
    div2.appendChild(novaLista)
    novaLista.id = 'novaLista'
    botaoAddItemLista.disabled = false
}

function adicionarItemLista(){
    const novaLista = document.querySelector('ul#novaLista')
    const novoItemLista = document.createElement('li')    
    novoItemLista.textContent = 'eu sou um elemento da lista'
    novaLista.appendChild(novoItemLista)

}



botaoAdd.addEventListener('click', criarParagrafo)
botaoRemove.addEventListener('click', removerParagrafo)
botaoAddDiv.addEventListener('click', adicionarDiv)
botaoAddLista.addEventListener('click', adicionarLista)
botaoAddItemLista.addEventListener('click', adicionarItemLista)

