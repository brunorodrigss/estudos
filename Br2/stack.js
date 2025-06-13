function Stack() {
    if (!(this instanceof Stack)){
        return new Stack()
    }

    var items = []

    this.push = function(element){
        //adiciona um novo item
        items.push(element)
    }

    this.pop = function(){
        //remove um item no topo da pilha
        return items.pop()
    }

    this.peek = function(){
        //devolve o elemento que esta no topo da pilha
        return items[items.length -1]
    }

    this.isEmpty = function(){
        return items.length === 0
    }
    
    this.clear = function(){
        //limpa a pilha
        items = []
    }

    this.size = function(){
        //inofrma o tamanho da pilha
        return items.length
    }

    this.print = function(){
        //imprime a pilha no console
        console.log("Pilha: " + items.join(" -> "))

    }
}

var pilha = Stack()

pilha.push('1')
pilha.push('2')
pilha.push('3')
pilha.print()
pilha.pop()
pilha.print()