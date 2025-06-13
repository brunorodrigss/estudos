// Callback de finalização
function finalizarCompra(lista, callback) {
    console.log("Finalizando compra...");
    callback(lista); // Chama a função passada
  }
  
  // Função para adicionar itens com REST
  function adicionarItens(listaAtual, ...novosItens) {
    // ...spread para criar nova lista com os itens antigos + novos
    const novaLista = [...listaAtual, ...novosItens];
    return novaLista;
  }
  
  // Função para mostrar total
  function mostrarTotal(lista) {
    let total = lista.reduce((soma, item) => soma + item.preco, 0);
    console.log("Itens comprados:");
    lista.forEach(item => console.log(`- ${item.nome}: R$${item.preco}`));
    console.log(`💰 Total: R$${total}`);
  }
  
  // 👇 Começando com uma lista vazia
  let listaDeCompras = [];
  
  // Adicionando produtos
  listaDeCompras = adicionarItens(
    listaDeCompras,
    { nome: "Arroz", preco: 10 },
    { nome: "Feijão", preco: 8 },
    { nome: "Macarrão", preco: 6 }
  );
  
  // Finalizando compra (callback aqui!)
  finalizarCompra(listaDeCompras, mostrarTotal);
