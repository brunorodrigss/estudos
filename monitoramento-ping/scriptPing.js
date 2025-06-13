async function carregarDados() {
  try {
    const resposta = await fetch('http://localhost:3000/status');
    const dados = await resposta.json();

    const tbody = document.querySelector("#statusTable tbody");
    tbody.innerHTML = "";

    dados.forEach((host) => {
      const linha = document.createElement("tr");

      linha.innerHTML = `
        <td>${host.name}</td>
        <td>${host.ip}</td>
        <td class="${host.status.toLowerCase()}">${host.status}</td>
        <td>${host.time}</td>
        <td>${host.date}</td>
      `;

      tbody.appendChild(linha);
    });

  } catch (erro) {
    console.error("Erro ao carregar dados:", erro);
  }
}

// Primeira chamada
carregarDados();

// Atualiza a cada 5 minutos
setInterval(carregarDados, 5 * 60 * 1000);
